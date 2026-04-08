import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

// ── Reuse transporter across requests ────────────────────────────────────────
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS;
    if (!user || !pass) {
      console.error("Contact form error: missing EMAIL_USER or EMAIL_PASS env vars");
      return NextResponse.json({ error: "Server email not configured" }, { status: 500 });
    }

    // ── Send both emails in parallel ─────────────────────────────────────────
    await Promise.all([

      // Email to you
      transporter.sendMail({
        from: user,
        to: user,
        subject: `📬 New Message from ${name}`,
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </head>
            <body style="margin:0;padding:0;background:#0d0d1a;font-family:'Segoe UI',Arial,sans-serif;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#0d0d1a;padding:40px 0;">
                <tr>
                  <td align="center">
                    <table width="580" cellpadding="0" cellspacing="0" style="background:#13102b;border-radius:16px;overflow:hidden;border:1px solid #3a2d6e;">

                      <!-- Header -->
                      <tr>
                        <td style="background:linear-gradient(135deg,#7042f8,#9b6dff);padding:36px 40px;text-align:center;">
                          <p style="margin:0 0 8px 0;font-size:13px;color:#e0d4ff;letter-spacing:2px;text-transform:uppercase;">Portfolio Contact</p>
                          <h1 style="margin:0;font-size:26px;color:#ffffff;font-weight:700;">New Message Received</h1>
                        </td>
                      </tr>

                      <!-- Body -->
                      <tr>
                        <td style="padding:36px 40px;">

                          <!-- Sender Info -->
                          <table width="100%" cellpadding="0" cellspacing="0" style="background:#1c1740;border-radius:12px;border:1px solid #3a2d6e;margin-bottom:24px;">
                            <tr>
                              <td style="padding:24px 28px;">
                                <p style="margin:0 0 16px 0;font-size:11px;color:#9b6dff;letter-spacing:2px;text-transform:uppercase;font-weight:600;">Sender Details</p>
                                <table width="100%" cellpadding="0" cellspacing="0">
                                  <tr>
                                    <td style="padding:8px 0;border-bottom:1px solid #2d2556;">
                                      <span style="font-size:12px;color:#7b6aaa;text-transform:uppercase;letter-spacing:1px;">Name</span><br/>
                                      <span style="font-size:16px;color:#ffffff;font-weight:600;">${name}</span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="padding:8px 0;">
                                      <span style="font-size:12px;color:#7b6aaa;text-transform:uppercase;letter-spacing:1px;">Email</span><br/>
                                      <a href="mailto:${email}" style="font-size:16px;color:#9b6dff;font-weight:600;text-decoration:none;">${email}</a>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>

                          <!-- Message -->
                          <table width="100%" cellpadding="0" cellspacing="0" style="background:#1c1740;border-radius:12px;border:1px solid #3a2d6e;margin-bottom:28px;">
                            <tr>
                              <td style="padding:24px 28px;">
                                <p style="margin:0 0 14px 0;font-size:11px;color:#9b6dff;letter-spacing:2px;text-transform:uppercase;font-weight:600;">Message</p>
                                <p style="margin:0;font-size:15px;color:#c9bfee;line-height:1.8;">${message.replace(/\n/g, "<br/>")}</p>
                              </td>
                            </tr>
                          </table>

                          <!-- Reply Button -->
                          <table width="100%" cellpadding="0" cellspacing="0">
                            <tr>
                              <td align="center">
                                <a href="mailto:${email}" style="display:inline-block;background:linear-gradient(135deg,#7042f8,#9b6dff);color:#ffffff;text-decoration:none;font-size:15px;font-weight:600;padding:14px 36px;border-radius:50px;letter-spacing:0.5px;">
                                  Reply to ${name}
                                </a>
                              </td>
                            </tr>
                          </table>

                        </td>
                      </tr>

                      <!-- Footer -->
                      <tr>
                        <td style="padding:20px 40px;border-top:1px solid #2d2556;text-align:center;">
                          <p style="margin:0;font-size:12px;color:#4a3d7a;">This message was sent via your portfolio contact form.</p>
                        </td>
                      </tr>

                    </table>
                  </td>
                </tr>
              </table>
            </body>
          </html>
        `,
      }),

      // Confirmation email to sender
      transporter.sendMail({
        from: user,
        to: email,
        subject: `Got your message, ${name}!`,
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </head>
            <body style="margin:0;padding:0;background:#0d0d1a;font-family:'Segoe UI',Arial,sans-serif;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#0d0d1a;padding:40px 0;">
                <tr>
                  <td align="center">
                    <table width="580" cellpadding="0" cellspacing="0" style="background:#13102b;border-radius:16px;overflow:hidden;border:1px solid #3a2d6e;">

                      <!-- Header -->
                      <tr>
                        <td style="background:linear-gradient(135deg,#7042f8,#9b6dff);padding:36px 40px;text-align:center;">
                          <p style="margin:0 0 6px 0;font-size:36px;">👋</p>
                          <h1 style="margin:0;font-size:26px;color:#ffffff;font-weight:700;">Hey ${name}!</h1>
                          <p style="margin:8px 0 0 0;font-size:15px;color:#e0d4ff;">Thanks for reaching out.</p>
                        </td>
                      </tr>

                      <!-- Body -->
                      <tr>
                        <td style="padding:36px 40px;">

                          <p style="margin:0 0 24px 0;font-size:15px;color:#c9bfee;line-height:1.8;">
                            I've received your message and will get back to you as soon as possible — usually within 24 hours.
                          </p>
G
                          <!-- Message recap -->
                          <table width="100%" cellpadding="0" cellspacing="0" style="background:#1c1740;border-radius:12px;border:1px solid #3a2d6e;margin-bottom:28px;">
                            <tr>
                              <td style="padding:24px 28px;">
                                <p style="margin:0 0 14px 0;font-size:11px;color:#9b6dff;letter-spacing:2px;text-transform:uppercase;font-weight:600;">Your Message</p>
                                <p style="margin:0;font-size:14px;color:#9b8ec4;line-height:1.8;font-style:italic;">"${message.replace(/\n/g, "<br/>")}"</p>
                              </td>
                            </tr>
                          </table>

                          <p style="margin:0 0 6px 0;font-size:15px;color:#c9bfee;line-height:1.8;">
                            In the meantime, feel free to check out my work or connect with me on social media.
                          </p>
                          <p style="margin:24px 0 0 0;font-size:15px;color:#c9bfee;">
                            Best regards,<br/>
                            <strong style="color:#ffffff;font-size:17px;">Rohan Shrestha</strong><br/>
                            <span style="font-size:13px;color:#7b6aaa;">Flutter Developer</span>
                          </p>

                        </td>
                      </tr>

                      <!-- Footer -->
                      <tr>
                        <td style="padding:20px 40px;border-top:1px solid #2d2556;text-align:center;">
                          <p style="margin:0;font-size:12px;color:#4a3d7a;">You're receiving this because you submitted the contact form on Rohan's portfolio.</p>
                        </td>
                      </tr>

                    </table>
                  </td>
                </tr>
              </table>
            </body>
          </html>
        `,
      }),

    ]);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Contact form error:", error?.message ?? error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}