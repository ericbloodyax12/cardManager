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
  const { control, handleSubmit, register } = useForm<FormValues>()

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }
  const {
    field: { onChange, value },
  } = useController({ control, defaultValue: false, name: 'rememberMe' })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField {...register('email')} label={'email'} />
      <TextField {...register('password')} label={'password'} variant={'password'} />
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
