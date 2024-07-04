import React from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Privacy Policy | jjx Web Development",
  description: "Privacy policy for jjx Web Development services",
};

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <div className="space-y-4">
          <section>
            <h2 className="text-2xl font-semibold mb-2">
              1. Information We Collect
            </h2>
            <p>
              We collect information you provide directly to us, such as when
              you fill out a contact form, including your name, email address,
              and any message content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">
              2. How We Use Your Information
            </h2>
            <p>
              We use the information we collect to provide, maintain, and
              improve our services, to communicate with you about projects, and
              to comply with legal obligations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">
              3. Information Sharing and Disclosure
            </h2>
            <p>
              We do not sell, trade, or otherwise transfer your personally
              identifiable information to outside parties. This does not include
              trusted third parties who assist us in operating our website or
              servicing you, as long as those parties agree to keep this
              information confidential.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">4. Data Security</h2>
            <p>
              We implement a variety of security measures to maintain the safety
              of your personal information. However, no method of transmission
              over the Internet or method of electronic storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">
              5. Cookies and Tracking Technologies
            </h2>
            <p>
              We may use cookies and similar tracking technologies to track
              activity on our website and hold certain information. You can
              instruct your browser to refuse all cookies or to indicate when a
              cookie is being sent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">
              6. Third-Party Links
            </h2>
            <p>
              Our website may contain links to third-party websites. We have no
              control over and assume no responsibility for the content, privacy
              policies, or practices of any third-party sites or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">
              7. Children&apos;s Privacy
            </h2>
            <p>
              Our services are not intended for use by children under the age of
              13. We do not knowingly collect personal information from children
              under 13.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">
              8. Changes to This Privacy Policy
            </h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page
              and updating the "last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">9. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us using the information provided on our website.
            </p>
          </section>
        </div>

        <div className="mt-8">
          <p className="italic text-sm mb-4">Last updated: 07/04/2024</p>
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
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
