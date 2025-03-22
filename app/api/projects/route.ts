import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function GET(request: Request) {
  try {
    
    const { data: testData, error: testError } = await supabase
      .from('projects')
      .select('count')
    
    if (testError) {
      console.error('Database connection test failed:', testError)
      return NextResponse.json(
        { error: 'Database connection failed' },
        { status: 503 }
      )
    }

    const { searchParams } = new URL(request.url)
    const limit = parseInt(searchParams.get("limit") || "6")
    const offset = parseInt(searchParams.get("offset") || "0")
    
    const { data, error, count } = await supabase
      .from('projects')
      .select('*', { count: 'exact' })
      .range(offset, offset + limit - 1)
    
    if (error) {
      console.error('Query error:', error)
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      )
    }

    return NextResponse.json({
      projects: data || [],
      total: count || 0,
      limit,
      offset
    })
  } catch (error) {
    console.error('Unexpected error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

