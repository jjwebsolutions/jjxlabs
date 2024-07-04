// app/actions/contact.ts
"use server";

import { z } from "zod";
import nodemailer from "nodemailer";

// Define a schema for input validation
const schema = z.object({
  email: z.string().email("Invalid email address"),
  message: z
    .string()
    .min(1, "Message is required")
    .max(1000, "Message is too long"),
});

export async function submitContact(formData: FormData) {
  // Validate the input
  const validatedFields = schema.safeParse({
    email: formData.get("email"),
    message: formData.get("message"),
  });

  // If validation fails, return the errors
  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email, message } = validatedFields.data;

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

    return {
      success: true,
      message: "Your message has been sent successfully!",
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      message: "Failed to send message. Please try again later.",
    };
  }
}
