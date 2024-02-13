import { z } from 'zod'

const emailSchema = z.string().trim().email() // required by default

export const forgotPasswordSchema = z.object({
    email: emailSchema,
})