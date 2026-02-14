import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

// Ensure this route runs in the Node runtime so nodemailer works
export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate server env vars
    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS;
    if (!user || !pass) {
      console.error("Contact form error: missing EMAIL_USER or EMAIL_PASS env vars");
      return NextResponse.json({ error: "Server email not configured" }, { status: 500 });
    }

    // Create transporter - adjust credentials as needed
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });

    // Email to you
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    // Confirmation email to user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for your message",
      html: `
        <h2>Hello ${name}!</h2>
        <p>Thank you for reaching out. I've received your message and will get back to you as soon as possible.</p>
        <p>Best regards,<br>Rohan Shrestha</p>
      `,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Contact form error:", error?.message ?? error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
