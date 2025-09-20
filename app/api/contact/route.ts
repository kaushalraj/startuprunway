import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Since no email service is configured, we'll create a mailto link
    // that opens the user's email client with pre-filled information
    const subject = encodeURIComponent(`Contact Form Submission from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)

    const mailtoUrl = `mailto:rppalnaty@gmail.com?subject=${subject}&body=${body}`

    return NextResponse.json({
      success: true,
      message: "Form submitted successfully",
      mailtoUrl: mailtoUrl,
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
