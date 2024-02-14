import { z } from 'zod'

const emailSchema = z.string().trim().email() // required by default
const passwordSchema = z.string().min(3) // required by default // todo: add error message
const confirmPassword = z.string().min(3) // required by default

export const signUpSchema = z.object({
    email: emailSchema,
    password: passwordSchema,
    confirmPassword
}).refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords does not match'
})

// If the passwords fail to parse for the base reason (not at least 3 characters) then that error will come through,
// but if the whole base object succeeds to parse, then the super refine check will happen.
