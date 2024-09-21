import { z } from 'zod'

const emailSchema = z.string().trim().email() // required by default
const passwordSchema = z.string().min(3) // required by default
const rememberMeSchema = z.boolean().default(false) // required by default

export const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
  rememberMe: rememberMeSchema,
})
export type LoginSchema = {
    email: string,
    password: string,
    rememberMe: boolean,

}