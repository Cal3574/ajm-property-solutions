import { Resend } from "resend";
import { siteConfig } from "@/lib/site-config";
import type { ContactEmailPayload, EmailSender } from "@/lib/contact/types";

export class ResendEmailSender implements EmailSender {
  constructor(private readonly apiKey: string | undefined) {}

  async send(payload: ContactEmailPayload): Promise<void> {
    const client = new Resend(this.apiKey);

    // ajmpropertysolutions.co.uk must be a verified sending domain in Resend,
    // otherwise Resend rejects or sandbox-restricts delivery.
    const { error } = await client.emails.send({
      from: `AJM Property Solutions Website <website@ajmpropertysolutions.co.uk>`,
      to: siteConfig.email,
      replyTo: payload.email,
      subject: `New enquiry from ${payload.name}`,
      text: [
        `Name: ${payload.name}`,
        `Email: ${payload.email}`,
        `Phone: ${payload.phone}`,
        "",
        payload.message,
      ].join("\n"),
    });

    if (error) {
      throw new Error(error.message);
    }
  }
}

export function createResendEmailSender(): ResendEmailSender {
  return new ResendEmailSender(process.env.RESEND_API_KEY);
}
