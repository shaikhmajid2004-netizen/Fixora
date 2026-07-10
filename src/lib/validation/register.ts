import { z } from "zod";

export const registerSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name must be at least 2 characters"),

  lastName: z
    .string()
    .min(2, "Last name must be at least 2 characters"),

  email: z
    .email("Invalid email address"),

  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number is too long"),

  password: z
    .string()
    .min(6, "Password must be at least 6 characters"),

  role: z.enum(["customer", "worker"]),
});

export type RegisterInput = z.infer<typeof registerSchema>;