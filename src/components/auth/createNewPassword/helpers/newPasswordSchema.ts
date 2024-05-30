import { z } from 'zod'


const passwordSchema = z.string().min(3) // required by default


export const newPasswordSchema = z.object({
  password: passwordSchema,
})
