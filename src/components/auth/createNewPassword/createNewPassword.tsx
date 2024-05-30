import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { TextField } from '@/components/ui/textField'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import {Typography} from "@/components/ui/typography";
import {useNavigate} from "react-router-dom";
import {Card} from "@/components/ui/card";

import s from './createNewPassword.module.scss'
import {newPasswordSchema} from "@/components/auth/createNewPassword/helpers/newPasswordSchema";

export type FormValuesType = z.infer<typeof newPasswordSchema> // Для того что бы не писать типы для формы вручную - z.infer

export const CreateNewPassword = () => {
    const navigate = useNavigate()
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValuesType>({
    defaultValues: {

    },
    resolver: zodResolver(newPasswordSchema),
  })

  const onSubmit = (data: FormValuesType) => {
    console.log('data form newPassword onSubmit',data)
    navigate('/login')
  }

  return (

      <Card className={s.cardContainer}>
          <Typography variant={"h1"}>Create New Password</Typography>
          <form className={s.formContainer} onSubmit={handleSubmit(onSubmit)}>

              <TextField
                  className={s.textField}
                  {...register('password')}
                  errorMessage={errors.password?.message}
                  label={'Password'}
                  variant={'password'}
              />

              <Typography variant={'body2'} className={s.newPasswordText} >
                Create new password and we will send you further instructions to email
              </Typography>



              <Button className={s.submit} type={'submit'} fullWidth={true}>
                 Create New Password
              </Button>
          </form>
      </Card>
  )
}
