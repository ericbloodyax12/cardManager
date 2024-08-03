import { useForm } from 'react-hook-form'

import { loginSchema } from '@/components/auth/login/helpers/loginSchema'

import { Button } from '@/components/ui/button'
import { TextField } from '@/components/ui/textField'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'


import {ControlledCheckboxComponent} from "@/components/ui/controlled/controlledCheckBox/controlledCheckboxComponent";
import {Typography} from "@/components/ui/typography";
import {useNavigate} from "react-router-dom";
import {Card} from "@/components/ui/card";

import s from './login-form.module.scss'
import {authServices} from "@/services/api/auth-services";
import {useEffect} from "react";

 // ++++++todo ask for useRef

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

  // const emailRef = useRef<HTMLInputElement | null>(null);
  // const handleFocusEmail = () => {
  //   if (emailRef.current) {
  //     emailRef.current.focus(); // Установка фокуса на поле email при необходимости
  //   }
  // };
  useEffect(() => {
    authServices.getIsAuth()
  }, []);
  const onSubmit = async (data: FormValuesType) => {
      const {email,password,rememberMe} = data
     await authServices.signIn(email,password,rememberMe)
      navigate("/")
    console.log('data form Login onSubmit',data)
  }
  //
  // console.log("this is focus", handleFocusEmail())

  return (

      <Card className={s.cardContainer}>
          <Typography variant={"h1"}>Sign In</Typography>
          <form className={s.formContainer} onSubmit={handleSubmit(onSubmit)}>
              <TextField
                  className={s.textField}
                  {...register('email')}
                  errorMessage={errors.email?.message}
                  label={'email'}
                  // R
              />
              <TextField
                  className={s.textField}
                  {...register('password')}
                  errorMessage={errors.password?.message}
                  label={'password'}
                  variant={'password'}
              />
              <ControlledCheckboxComponent control={control}/>

              <div className={s.forgotPasswordContainer}>
                  <Typography variant={'body2'} className={s.forgotPassword} onClick={() => {
                      navigate('/forgot_password')
                  }}>Forgot Password?</Typography>
              </div>
              <Button className={s.submit} type={'submit'} fullWidth={true}>
                  Submit
              </Button>
              <div className={s.signUpContainer}>
                  <Typography as={"a"} variant={'link1'} className={s.signUp} onClick={() => {
                  navigate('/sign_up')}}>
                      Sign Up
                  </Typography>
              </div>

          </form>
      </Card>
  )
}
