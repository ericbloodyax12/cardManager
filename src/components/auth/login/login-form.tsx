import { useForm } from 'react-hook-form'

import { loginSchema } from '@/components/auth/login/helpers/loginSchema'

import { Button } from '@/components/ui/button'
import { TextField } from '@/components/ui/textField'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './login-form.module.scss'
import {ControlledCheckboxComponent} from "@/components/ui/controlled/controlledCheckBox/controlledCheckboxComponent";
import {Typography} from "@/components/ui/typography";
import { useNavigate} from "react-router-dom";


export type FormValuesType = z.infer<typeof loginSchema> // Для того что бы не писать типы для формы вручную - z.infer

export const LoginForm = () => {

    const navigate = useNavigate()
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValuesType>({
    defaultValues: {
      rememberMe: false,
    },
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (data: FormValuesType) => {
    console.log(data)
  }
    console.log(control)
    console.log(s.forgotPassword)


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
        <ControlledCheckboxComponent control={control}/>
      <Button className={s.submit} type={'submit'}>
        Submit
      </Button>

          <Typography variant={'body2'} className={s.forgotPassword}>Forgot Password?</Typography>


           <Typography as={"a"} variant={'link1'} onClick={() => { navigate('/sign_up')} }>Sign Up</Typography>

    </form>
  )
}
