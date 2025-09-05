import { z } from "zod";

export const signInSchema = z.object({
    email: z
        .string()
        .nonempty({ message: "Email is required" })
        .email({ message: "Please enter a valid email address" }),
    password: z
        .string()
        .nonempty({ message: "Password is required" })
        .min(6, { message: "Password must be at least 6 characters long" }),
});

export type typeSignInSchema = z.infer<typeof signInSchema>;