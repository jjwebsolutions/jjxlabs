// app/actions/contact.ts
"use server";

import nodemailer from "nodemailer";

export async function submitContact(formData: FormData) {
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  // Server-side validation
  if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
    return { error: "Invalid email address" };
  }

  try {
    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || "587"),
      secure: process.env.EMAIL_SECURE === "true",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: "New Contact Form Submission",
      text: `New contact form submission:
        
Email: ${email}
Message: ${message}`,
      html: `<p>New contact form submission:</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>`,
    });

    return { success: "Message sent successfully" };
  } catch (error) {
    console.error("Error sending email:", error);
    return { error: "Error sending message" };
  }
}
