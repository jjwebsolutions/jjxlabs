"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { toast } from "sonner";

import { Loader2 } from "lucide-react";

function Form() {
  const [loading, setLoading] = useState(false);

  const handleSumbit = (formData: FormData) => {
    setLoading(true);
    submitContact(formData);
  };

  async function submitContact(formData: FormData) {
    setLoading(true);
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
        setLoading(false);
      } else {
        toast("Failed to send email. Please try again.");
        setLoading(false);
      }
    } catch (error) {
      toast("Failed to send email. Please try again.");
      setLoading(false);
      console.error("Error sending email:", error);
    }
  }
  return (
    <form action={handleSumbit} className="space-y-4">
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
      {loading ? (
        <Button disabled>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Please wait
        </Button>
      ) : (
        <Button type="submit" className="w-full">
          Contact Me
        </Button>
      )}
    </form>
  );
}

export default Form;
