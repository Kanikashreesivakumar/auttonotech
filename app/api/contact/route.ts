import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ""
const supabase = createClient(supabaseUrl, supabaseServiceKey)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required" }, { status: 400 })
    }

    // Insert data into Supabase
    const { data, error } = await supabase.from("contacts").insert([
      {
        name,
        email,
        phone: phone || null,
        message,
        created_at: new Date().toISOString(),
      },
    ])

    if (error) {
      console.error("Error inserting contact:", error)
      return NextResponse.json({ error: "Failed to submit contact form" }, { status: 500 })
    }

    return NextResponse.json({ success: true, message: "Contact form submitted successfully" }, { status: 201 })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

