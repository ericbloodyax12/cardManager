import { z } from 'zod'

const emailSchema = z.string().trim().nonempty("Email is required").email("Invalid email address") // required by default

export const forgotPasswordSchema = z.object({
    email: emailSchema,
})