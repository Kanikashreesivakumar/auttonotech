import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ""
const supabase = createClient(supabaseUrl, supabaseServiceKey)

export async function GET(request: Request) {
  try {
    const url = new URL(request.url)
    const limit = Number.parseInt(url.searchParams.get("limit") || "6")
    const offset = Number.parseInt(url.searchParams.get("offset") || "0")
    const category = url.searchParams.get("category") || null

    let query = supabase
      .from("blogs")
      .select("*")
      .order("created_at", { ascending: false })
      .range(offset, offset + limit - 1)

    if (category && category !== "All") {
      query = query.eq("category", category)
    }

    const { data, error, count } = await query

    if (error) {
      console.error("Error fetching blogs:", error)
      return NextResponse.json({ error: "Failed to fetch blogs" }, { status: 500 })
    }

    // Get total count for pagination
    const { count: totalCount, error: countError } = await supabase.from("blogs").select("*", { count: "exact" })

    if (countError) {
      console.error("Error counting blogs:", countError)
    }

    return NextResponse.json({
      blogs: data,
      total: totalCount,
      limit,
      offset,
    })
  } catch (error) {
    console.error("Error processing blogs request:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { title, excerpt, content, imageUrl, author, category } = body

    // Validate required fields
    if (!title || !content || !author || !category) {
      return NextResponse.json({ error: "Title, content, author, and category are required" }, { status: 400 })
    }

    // Insert data into Supabase
    const { data, error } = await supabase
      .from("blogs")
      .insert([
        {
          title,
          excerpt: excerpt || title.substring(0, 100) + "...",
          content,
          image_url: imageUrl || null,
          author,
          category,
          created_at: new Date().toISOString(),
        },
      ])
      .select()

    if (error) {
      console.error("Error inserting blog:", error)
      return NextResponse.json({ error: "Failed to create blog post" }, { status: 500 })
    }

    return NextResponse.json({ success: true, blog: data[0] }, { status: 201 })
  } catch (error) {
    console.error("Error processing blog creation:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

