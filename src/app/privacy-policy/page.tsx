import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

const title = "Privacy Policy";
const description =
  "How AJM Property Solutions collects and uses personal data submitted through our contact form.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    title: `${title} | ${siteConfig.name}`,
    description,
    url: `${siteConfig.url}/privacy-policy`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | ${siteConfig.name}`,
    description,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24 lg:px-12">
      <h1 className="font-heading text-4xl font-bold text-foreground sm:text-5xl">
        Privacy Policy
      </h1>
      <p className="mt-4 text-foreground-muted">
        This page explains what personal data {siteConfig.name} collects
        through this website, and how that data is used.
      </p>

      <div className="mt-12 space-y-10">
        <div>
          <h2 className="font-heading text-2xl font-bold text-foreground">
            What We Collect
          </h2>
          <p className="mt-3 leading-relaxed text-foreground-muted">
            When you submit an enquiry through our contact form, we collect
            the information you provide: your name, email address, phone
            number, and the message you send. We do not collect any other
            personal data through this website.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-bold text-foreground">
            How We Use It
          </h2>
          <p className="mt-3 leading-relaxed text-foreground-muted">
            The information you submit is used solely to respond to your
            enquiry, whether that&apos;s by phone, email, or WhatsApp. We do
            not use your data for marketing, and we do not share it with any
            third party.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-bold text-foreground">
            Data Storage
          </h2>
          <p className="mt-3 leading-relaxed text-foreground-muted">
            Contact form submissions are delivered directly to our email
            inbox via our email service provider, and are not stored in any
            separate database by this website.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-bold text-foreground">
            Analytics And Cookies
          </h2>
          <p className="mt-3 leading-relaxed text-foreground-muted">
            This website does not use analytics, tracking cookies, or any
            other form of visitor tracking.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-bold text-foreground">
            Your Rights &amp; Contacting Us
          </h2>
          <p className="mt-3 leading-relaxed text-foreground-muted">
            You have the right to ask what personal data we hold about you,
            and to request that it be corrected or deleted. To make a
            request, or if you have any questions about this policy, please
            contact us at{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-accent transition-colors hover:text-foreground"
            >
              {siteConfig.email}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
