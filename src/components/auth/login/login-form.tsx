import { useController, useForm } from 'react-hook-form'

import { CheckboxComponent } from '@/components/ui/ checkbox/checkbox'
import { Button } from '@/components/ui/button'
import { TextField } from '@/components/ui/textField'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './login-form.module.scss'

const loginSchema = z.object({
  email: z.string().trim().email(), // required by default
  password: z.string().min(3),
  rememberMe: z.boolean().default(false),
})

type FormValues = z.infer<typeof loginSchema> // Для того что бы не писать типы для формы вручную - z.infer

export const LoginForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>({
    defaultValues: {
      rememberMe: false,
    },
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }
  const {
    field: { onChange, value },
  } = useController({ control, defaultValue: false, name: 'rememberMe' }) // Используем useController из-за того что чекбокс из radix ui не совместим напрямую с register(). Что бы это исправить, воспользуемся хуком useController из react-hook-form:

  return (
    <form className={s.fromContainer} onSubmit={handleSubmit(onSubmit)}>
      <TextField
        className={s.textField}
        {...register('email')}
        errorMessage={errors.email?.message}
        label={'email'}
      />
      <TextField
        className={s.textField}
        {...register('password')}
        errorMessage={errors.password?.message}
        label={'password'}
        variant={'password'}
      />
      <CheckboxComponent
        checked={value}
        className={s.checkbox}
        label={'remember me'}
        onCheckedChange={onChange}
        withLabel
      />
      <Button className={s.submit} type={'submit'}>
        Submit
      </Button>
    </form>
  )
}
