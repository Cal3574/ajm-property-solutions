import { contactFormSchema } from "@/lib/contact/schema";
import type { ContactFormInput, ContactFormResult, EmailSender } from "@/lib/contact/types";

export async function submitContactForm(
  input: ContactFormInput,
  sender: EmailSender,
): Promise<ContactFormResult> {
  if (input.honeypot.trim() !== "") {
    return { ok: true };
  }

  const parsed = contactFormSchema.safeParse(input);

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const field = issue.path[0];
      if (typeof field === "string" && !fieldErrors[field]) {
        fieldErrors[field] = issue.message;
      }
    }

    return {
      ok: false,
      error: "validation",
      message: "Please check the highlighted fields and try again.",
      fieldErrors,
    };
  }

  try {
    await sender.send({
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone,
      message: parsed.data.message,
    });
  } catch {
    return {
      ok: false,
      error: "send-failed",
      message: "Something went wrong sending your message. Please try again or contact us directly.",
    };
  }

  return { ok: true };
}
