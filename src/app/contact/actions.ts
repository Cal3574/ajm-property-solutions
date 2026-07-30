"use server";

import { createResendEmailSender } from "@/lib/contact/resend-email-sender";
import { submitContactForm } from "@/lib/contact/submit-contact-form";
import type { ContactFormResult } from "@/lib/contact/types";

export async function submitContactFormAction(
  _prevState: ContactFormResult | null,
  formData: FormData,
): Promise<ContactFormResult> {
  const input = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    message: String(formData.get("message") ?? ""),
    honeypot: String(formData.get("company") ?? ""),
  };

  return submitContactForm(input, createResendEmailSender());
}
