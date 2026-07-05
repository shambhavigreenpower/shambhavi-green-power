import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  // Handle preflight OPTIONS request
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { name, phone, email, city, serviceType, systemSize, monthlyBill, message } = req.body;

    // Validate required fields
    if (!name || !phone || !city || !monthlyBill) {
      return res.status(400).json({ error: "Required fields are missing" });
    }

    // Configure the SMTP transporter using Gmail details
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false, // true for 465, false for 587
      auth: {
        user: process.env.SMTP_USER || "shambhavigreenpower@gmail.com",
        pass: process.env.SMTP_PASS || "tfsx tdbx jhrx fxtg", // Gmail App Password
      },
    });

    const receiverEmail = process.env.CONTACT_RECEIVER || "shambhavigreenpower@gmail.com";

    // Setup the mail payload details
    const mailOptions = {
      from: `"Shambhavi Solar Website" <${process.env.SMTP_USER || "shambhavigreenpower@gmail.com"}>`,
      to: receiverEmail,
      subject: `New Solar Inquiry: ${name} (${city})`,
      replyTo: email || undefined,
      text: `
New Solar Inquiry Form Submission:

Full Name: ${name}
Phone Number: ${phone}
Email Address: ${email || "N/A"}
City/Village: ${city}
Service Type: ${serviceType}
System Size: ${systemSize || "N/A"}
Monthly Electricity Bill: ₹${monthlyBill}
Custom Message: ${message || "None"}
      `,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 25px; border: 1px solid #e2e8f0; border-radius: 16px; background-color: #ffffff; color: #1e293b;">
          <div style="text-align: center; border-bottom: 2px solid #1a6b2e; padding-bottom: 15px; margin-bottom: 20px;">
            <h2 style="color: #1a6b2e; margin: 0; font-size: 22px; font-weight: 800; letter-spacing: -0.025em;">
              Shambhavi Green Power
            </h2>
            <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #64748b; font-weight: 700;">
              New Customer Quote Request
            </span>
          </div>
          
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 12px 6px; font-weight: 700; color: #64748b; width: 40%;">Full Name</td>
              <td style="padding: 12px 6px; color: #0f172a; font-weight: 600;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9; background-color: #f8fafc;">
              <td style="padding: 12px 6px; font-weight: 700; color: #64748b;">Phone Number</td>
              <td style="padding: 12px 6px; color: #1a6b2e; font-weight: 700;">
                <a href="tel:${phone}" style="color: #1a6b2e; text-decoration: none;">${phone}</a>
              </td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 12px 6px; font-weight: 700; color: #64748b;">Email Address</td>
              <td style="padding: 12px 6px; color: #0f172a;">
                ${email ? `<a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>` : '<span style="color: #94a3b8; font-style: italic;">N/A</span>'}
              </td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9; background-color: #f8fafc;">
              <td style="padding: 12px 6px; font-weight: 700; color: #64748b;">City / Village</td>
              <td style="padding: 12px 6px; color: #0f172a; font-weight: 600;">${city}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 12px 6px; font-weight: 700; color: #64748b;">Service Type</td>
              <td style="padding: 12px 6px; color: #0f172a;">${serviceType}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9; background-color: #f8fafc;">
              <td style="padding: 12px 6px; font-weight: 700; color: #64748b;">System Size Range</td>
              <td style="padding: 12px 6px; color: #0f172a; font-weight: 600;">${systemSize || "N/A"}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 12px 6px; font-weight: 700; color: #64748b;">Monthly Electricity Bill</td>
              <td style="padding: 12px 6px; color: #b45309; font-weight: 700; font-size: 15px;">₹${monthlyBill}</td>
            </tr>
          </table>
          
          ${
            message
              ? `
            <div style="margin-top: 25px; padding: 15px; background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px;">
              <h4 style="margin: 0 0 8px 0; color: #475569; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Customer Notes</h4>
              <p style="margin: 0; color: #334155; line-height: 1.6; font-size: 14px;">${message}</p>
            </div>
          `
              : ""
          }
          
          <div style="margin-top: 30px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; padding-top: 15px;">
            This email was generated automatically by the Shambhavi Green Power contact form.
          </div>
        </div>
      `,
    };

    // Dispatch the email using Nodemailer
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true, message: "Inquiry email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ error: "Failed to send email inquiry: " + error.message });
  }
}
