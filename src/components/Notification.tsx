"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function Notification() {
  const [message, setMessage] = useState("");
  const searchParams = useSearchParams();

  useEffect(() => {
    const msg = searchParams.get("message");
    if (msg) {
      setMessage(msg);
      const timer = setTimeout(() => setMessage(""), 5000); // Hide after 5 seconds
      return () => clearTimeout(timer);
    }
  }, [searchParams]);

  if (!message) return null;

  return (
    <Alert className="fixed top-4 right-4 z-50 max-w-md">
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
}
