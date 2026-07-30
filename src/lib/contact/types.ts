export type ContactFormInput = {
  name: string;
  email: string;
  phone: string;
  message: string;
  honeypot: string;
};

export type ContactEmailPayload = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export interface EmailSender {
  send(payload: ContactEmailPayload): Promise<void>;
}

export type ContactFormResult =
  | { ok: true }
  | {
      ok: false;
      error: "validation";
      message: string;
      fieldErrors: Partial<Record<keyof ContactEmailPayload, string>>;
    }
  | { ok: false; error: "send-failed"; message: string };
