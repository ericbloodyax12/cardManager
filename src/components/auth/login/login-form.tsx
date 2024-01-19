import { useController, useForm } from 'react-hook-form'

import { CheckboxComponent } from '@/components/ui/ checkbox/checkbox'
import { Button } from '@/components/ui/button'
import { TextField } from '@/components/ui/textField'

type FormValues = {
  email: string
  password: string
  rememberMe: boolean
}

export const LoginForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>()

  console.log(errors)

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }
  const {
    field: { onChange, value },
  } = useController({ control, defaultValue: false, name: 'rememberMe' })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        {...register('email', {
          pattern: { message: 'Invalid email', value: emailRegex },
          required: 'Email is required',
        })}
        errorMessage={errors.email?.message}
        label={'email'}
      />
      <TextField
        {...register('password', {
          minLength: { message: 'Password has to be at least 3 characters long', value: 3 },
          required: 'Password is required',
        })}
        errorMessage={errors.password?.message}
        label={'password'}
        variant={'password'}
      />
      <CheckboxComponent
        checked={value}
        label={'remember me'}
        onCheckedChange={onChange}
        withLabel
      />
      <Button type={'submit'}>Submit</Button>
    </form>
  )
}

const emailRegex =
  /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/
