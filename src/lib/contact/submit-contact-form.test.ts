import { describe, expect, it, vi } from "vitest";
import { submitContactForm } from "@/lib/contact/submit-contact-form";
import type { ContactFormInput, EmailSender } from "@/lib/contact/types";

function validInput(overrides: Partial<ContactFormInput> = {}): ContactFormInput {
  return {
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "07960121157",
    message: "I'd like a quote for repointing my garden wall.",
    honeypot: "",
    ...overrides,
  };
}

function fakeSender(): EmailSender & { send: ReturnType<typeof vi.fn> } {
  return { send: vi.fn().mockResolvedValue(undefined) };
}

describe("submitContactForm", () => {
  it("calls the sender once with the correctly-shaped payload and returns success on valid input", async () => {
    const sender = fakeSender();
    const input = validInput();

    const result = await submitContactForm(input, sender);

    expect(result).toEqual({ ok: true });
    expect(sender.send).toHaveBeenCalledTimes(1);
    expect(sender.send).toHaveBeenCalledWith({
      name: input.name,
      email: input.email,
      phone: input.phone,
      message: input.message,
    });
  });

  it("rejects invalid input without calling the sender, describing the problem", async () => {
    const sender = fakeSender();
    const input = validInput({ email: "not-an-email", message: "" });

    const result = await submitContactForm(input, sender);

    expect(sender.send).not.toHaveBeenCalled();
    expect(result.ok).toBe(false);
    if (result.ok || result.error !== "validation") {
      throw new Error("expected validation-error result");
    }
    expect(result.fieldErrors.email).toBeTruthy();
    expect(result.fieldErrors.message).toBeTruthy();
  });

  it("silently drops honeypot submissions, returning a success-shaped result without calling the sender", async () => {
    const sender = fakeSender();
    const input = validInput({ honeypot: "http://spam.example.com" });

    const result = await submitContactForm(input, sender);

    expect(sender.send).not.toHaveBeenCalled();
    expect(result).toEqual({ ok: true });
  });

  it("returns a failure result with no internal detail leaked when the sender throws", async () => {
    const sender: EmailSender = {
      send: vi.fn().mockRejectedValue(new Error("RESEND_API_KEY=sk_live_secret invalid")),
    };
    const input = validInput();

    const result = await submitContactForm(input, sender);

    expect(result.ok).toBe(false);
    if (result.ok || result.error !== "send-failed") {
      throw new Error("expected send-failed result");
    }
    expect(result.message).not.toMatch(/sk_live_secret/);
    expect(result.message).not.toMatch(/RESEND_API_KEY/);
    expect(JSON.stringify(result)).not.toMatch(/sk_live_secret/);
  });
});
