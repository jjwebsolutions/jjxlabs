import React from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Terms of Service | jjx Web Development",
  description: "Terms and conditions for using jjx Web Development services",
};

export default function TermsOfService() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
        <div className="space-y-4">
          <section>
            <h2 className="text-2xl font-semibold mb-2">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using jjx Web Development services, you agree to
              comply with and be bound by these Terms of Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">
              2. Description of Services
            </h2>
            <p>
              jjx Web Development provides web development services including
              but not limited to static websites, web applications, and
              full-stack development solutions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">
              3. Client Responsibilities
            </h2>
            <p>
              Clients are responsible for providing necessary content, assets,
              and timely feedback for project completion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">
              4. Intellectual Property Rights
            </h2>
            <p>
              Upon full payment, clients receive full rights to the final
              deliverables. jjx Web Development retains the right to showcase
              the work in its portfolio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">5. Payment Terms</h2>
            <p>
              Payment schedules and terms will be outlined in individual project
              agreements. Late payments may result in project delays.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">
              6. Limitation of Liability
            </h2>
            <p>
              jjx Web Development is not liable for any consequential,
              incidental, indirect, or special damages arising from your use of
              our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">7. Termination</h2>
            <p>
              Either party may terminate the service agreement with written
              notice. Clients are responsible for payment of all work completed
              up to the termination date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">8. Governing Law</h2>
            <p>
              These terms are governed by and construed in accordance with the
              laws of Europe.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">9. Changes to Terms</h2>
            <p>
              jjx Web Development reserves the right to modify these terms at
              any time. Continued use of our services after changes constitutes
              acceptance of the new terms.
            </p>
          </section>
        </div>

        <div className="mt-8">
          <Button asChild>
            <Link href="/">Return to Home</Link>
          </Button>
        </div>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-100">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 jjx. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs hover:underline underline-offset-4"
            href="/terms"
          >
            Terms of Service
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4"
            href="/privacy"
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
