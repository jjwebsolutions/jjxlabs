"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

function Form() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await submitContact({ email, message });
  };

  async function submitContact({
    email,
    message,
  }: {
    email: string;
    message: string;
  }) {
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
        // Clear inputs after successful submission
        setEmail("");
        setMessage("");
      } else {
        toast("Failed to send email. Please try again.");
      }
    } catch (error) {
      toast("Failed to send email. Please try again.");
      console.error("Error sending email:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        className="w-full"
        placeholder="Enter your email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Textarea
        className="w-full"
        placeholder="Your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={4}
        required
      />
      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Please wait
          </>
        ) : (
          "Contact Me"
        )}
      </Button>
    </form>
  );
}

export default Form;
