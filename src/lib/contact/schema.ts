import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name."),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z.string().trim().min(1, "Please enter a phone number."),
  message: z.string().trim().min(1, "Please enter a message."),
  honeypot: z.string(),
});
