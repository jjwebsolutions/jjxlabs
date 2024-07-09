"use client";
import React from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { toast } from "sonner";

function Form() {
  async function submitContact(formData: FormData) {
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, message }),
      });

      if (response.ok) {
        toast("Email sent successfully");
      } else {
        toast("Failed to send email. Please try again.");
      }
    } catch (error) {
      toast("Failed to send email. Please try again.");
      console.error("Error sending email:", error);
    }
  }
  return (
    <form action={submitContact} className="space-y-4">
      <Input
        className="w-full"
        placeholder="Enter your email"
        type="email"
        name="email"
        required
      />
      <Textarea
        className="w-full"
        placeholder="Your message"
        name="message"
        rows={4}
        required
      />
      <Button type="submit" className="w-full">
        Contact Me
      </Button>
    </form>
  );
}

export default Form;
