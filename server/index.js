import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the dist directory
app.use(express.static(join(__dirname, "../dist")));

// Create Nodemailer transporter with Gmail
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // Use App Password, not regular password
  },
});

// Verify transporter configuration
transporter.verify(function (error, success) {
  if (error) {
    console.log("Email configuration error:", error);
  } else {
    console.log("Server is ready to send emails");
  }
});

// Email endpoint
app.post("/api/send-email", async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      address,
      postcode,
      propertyType,
      services,
      bathrooms,
      timeline,
      contactTime,
      details,
    } = req.body;

    // Validate required fields
    if (!name || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: "Name, email, and phone are required fields",
      });
    }

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECIPIENT || process.env.EMAIL_USER,
      replyTo: email,
      subject: `🏠 New Consultation Request from ${name}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Consultation Request</title>
        </head>
        <body style="margin: 0; padding: 0; background-color: #f4f7fa; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f7fa; padding: 40px 20px;">
            <tr>
              <td align="center">
                <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">
                  
                  <!-- Header -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #2e7d6f 0%, #3ca089 100%); padding: 40px 30px; text-align: center;">
                      <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 600; letter-spacing: -0.5px;">
                        ✨ New Consultation Request
                      </h1>
                      <p style="margin: 10px 0 0 0; color: #e0f2f1; font-size: 14px;">
                        You have a new inquiry from your website
                      </p>
                    </td>
                  </tr>

                  <!-- Client Information Section -->
                  <tr>
                    <td style="padding: 40px 30px 0 30px;">
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="padding-bottom: 10px;">
                            <h2 style="margin: 0; color: #2e7d6f; font-size: 18px; font-weight: 600; display: flex; align-items: center;">
                              👤 Client Information
                            </h2>
                          </td>
                        </tr>
                      </table>
                      
                      <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8fafb; border-radius: 8px; border-left: 4px solid #2e7d6f; overflow: hidden;">
                        <tr>
                          <td style="padding: 20px 25px;">
                            <table width="100%" cellpadding="0" cellspacing="0">
                              <tr>
                                <td style="padding: 8px 0;">
                                  <span style="color: #64748b; font-size: 13px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px;">Name</span>
                                  <div style="color: #1e293b; font-size: 16px; font-weight: 500; margin-top: 4px;">${name}</div>
                                </td>
                              </tr>
                              <tr>
                                <td style="padding: 8px 0;">
                                  <span style="color: #64748b; font-size: 13px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px;">Email</span>
                                  <div style="margin-top: 4px;">
                                    <a href="mailto:${email}" style="color: #2e7d6f; font-size: 16px; text-decoration: none; font-weight: 500;">${email}</a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td style="padding: 8px 0;">
                                  <span style="color: #64748b; font-size: 13px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px;">Phone</span>
                                  <div style="margin-top: 4px;">
                                    <a href="tel:${phone}" style="color: #2e7d6f; font-size: 16px; text-decoration: none; font-weight: 500;">${phone}</a>
                                  </div>
                                </td>
                              </tr>
                              ${
                                address
                                  ? `
                              <tr>
                                <td style="padding: 8px 0;">
                                  <span style="color: #64748b; font-size: 13px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px;">Address</span>
                                  <div style="color: #1e293b; font-size: 15px; margin-top: 4px; line-height: 1.6;">${address}</div>
                                </td>
                              </tr>
                              `
                                  : ""
                              }
                              ${
                                postcode
                                  ? `
                              <tr>
                                <td style="padding: 8px 0;">
                                  <span style="color: #64748b; font-size: 13px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px;">Postcode</span>
                                  <div style="color: #1e293b; font-size: 15px; font-weight: 500; margin-top: 4px;">${postcode}</div>
                                </td>
                              </tr>
                              `
                                  : ""
                              }
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Property Details Section -->
                  <tr>
                    <td style="padding: 30px 30px 0 30px;">
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="padding-bottom: 10px;">
                            <h2 style="margin: 0; color: #2e7d6f; font-size: 18px; font-weight: 600;">
                              🏡 Property Details
                            </h2>
                          </td>
                        </tr>
                      </table>
                      
                      <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #fef7f0; border-radius: 8px; border-left: 4px solid #f59e0b; overflow: hidden;">
                        <tr>
                          <td style="padding: 20px 25px;">
                            <table width="100%" cellpadding="0" cellspacing="0">
                              <tr>
                                <td style="padding: 8px 0;">
                                  <span style="color: #64748b; font-size: 13px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px;">Property Type</span>
                                  <div style="color: #1e293b; font-size: 15px; font-weight: 500; margin-top: 4px;">${propertyType || "Not specified"}</div>
                                </td>
                              </tr>
                              ${
                                services && services.length > 0
                                  ? `
                              <tr>
                                <td style="padding: 8px 0;">
                                  <span style="color: #64748b; font-size: 13px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px;">Requested Services</span>
                                  <div style="margin-top: 8px;">
                                    ${services
                                      .map(
                                        (service) => `
                                      <span style="display: inline-block; background-color: #2e7d6f; color: #ffffff; padding: 6px 14px; border-radius: 20px; font-size: 13px; font-weight: 500; margin: 4px 4px 4px 0;">${service}</span>
                                    `,
                                      )
                                      .join("")}
                                  </div>
                                </td>
                              </tr>
                              `
                                  : ""
                              }
                              ${
                                bathrooms
                                  ? `
                              <tr>
                                <td style="padding: 8px 0;">
                                  <span style="color: #64748b; font-size: 13px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px;">Number of Bathrooms</span>
                                  <div style="color: #1e293b; font-size: 15px; font-weight: 500; margin-top: 4px;">${bathrooms}</div>
                                </td>
                              </tr>
                              `
                                  : ""
                              }
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Project Details Section -->
                  <tr>
                    <td style="padding: 30px 30px 0 30px;">
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="padding-bottom: 10px;">
                            <h2 style="margin: 0; color: #2e7d6f; font-size: 18px; font-weight: 600;">
                              📅 Project Details
                            </h2>
                          </td>
                        </tr>
                      </table>
                      
                      <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f0f9ff; border-radius: 8px; border-left: 4px solid #3b82f6; overflow: hidden;">
                        <tr>
                          <td style="padding: 20px 25px;">
                            <table width="100%" cellpadding="0" cellspacing="0">
                              ${
                                timeline
                                  ? `
                              <tr>
                                <td style="padding: 8px 0;">
                                  <span style="color: #64748b; font-size: 13px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px;">Timeline</span>
                                  <div style="color: #1e293b; font-size: 15px; margin-top: 4px; line-height: 1.6;">${timeline}</div>
                                </td>
                              </tr>
                              `
                                  : ""
                              }
                              ${
                                contactTime
                                  ? `
                              <tr>
                                <td style="padding: 8px 0;">
                                  <span style="color: #64748b; font-size: 13px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px;">Best Time to Contact</span>
                                  <div style="color: #1e293b; font-size: 15px; font-weight: 500; margin-top: 4px;">${contactTime}</div>
                                </td>
                              </tr>
                              `
                                  : ""
                              }
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  ${
                    details
                      ? `
                  <!-- Additional Details Section -->
                  <tr>
                    <td style="padding: 30px 30px 0 30px;">
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="padding-bottom: 10px;">
                            <h2 style="margin: 0; color: #2e7d6f; font-size: 18px; font-weight: 600;">
                              💬 Additional Details
                            </h2>
                          </td>
                        </tr>
                      </table>
                      
                      <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #faf5ff; border-radius: 8px; border-left: 4px solid #a855f7; overflow: hidden;">
                        <tr>
                          <td style="padding: 20px 25px;">
                            <p style="margin: 0; color: #1e293b; font-size: 15px; line-height: 1.7;">${details}</p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  `
                      : ""
                  }

                  <!-- Call to Action -->
                  <tr>
                    <td style="padding: 40px 30px;">
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td align="center" style="padding: 20px 0;">
                            <a href="mailto:${email}?subject=Re: Your Consultation Request" style="display: inline-block; background: linear-gradient(135deg, #2e7d6f 0%, #3ca089 100%); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-weight: 600; font-size: 15px; box-shadow: 0 4px 12px rgba(46, 125, 111, 0.3);">
                              📧 Reply to ${name}
                            </a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #f8fafb; padding: 30px; text-align: center; border-top: 1px solid #e2e8f0;">
                      <p style="margin: 0 0 8px 0; color: #64748b; font-size: 13px; line-height: 1.6;">
                        This email was sent from your website consultation form
                      </p>
                      <p style="margin: 0; color: #94a3b8; font-size: 12px;">
                        Received on ${new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" })}
                      </p>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
      text: `
╔════════════════════════════════════════════════════════════╗
║        ✨ NEW CONSULTATION REQUEST ✨                      ║
╚════════════════════════════════════════════════════════════╝

👤 CLIENT INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name:           ${name}
Email:          ${email}
Phone:          ${phone}
${address ? `Address:        ${address}` : ""}
${postcode ? `Postcode:       ${postcode}` : ""}

🏡 PROPERTY DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Property Type:  ${propertyType || "Not specified"}
${services && services.length > 0 ? `Services:       ${services.join(", ")}` : "Services:       None selected"}
${bathrooms ? `Bathrooms:      ${bathrooms}` : ""}

📅 PROJECT DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${timeline ? `Timeline:       ${timeline}` : ""}
${contactTime ? `Best Time:      ${contactTime}` : ""}

${details ? `💬 ADDITIONAL DETAILS\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n${details}\n` : ""}
────────────────────────────────────────────────────────────
📧 Reply directly to: ${email}
📞 Call: ${phone}
🕐 Received: ${new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" })}
────────────────────────────────────────────────────────────
This email was sent from your website consultation form.
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({
      success: false,
      message: "Failed to send email",
      error: error.message,
    });
  }
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", message: "Server is running" });
});

// Serve index.html for all other routes (SPA support)
app.get("*", (req, res) => {
  res.sendFile(join(__dirname, "../dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
