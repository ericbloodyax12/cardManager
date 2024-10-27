import { useForm } from 'react-hook-form'
import {toast} from "react-toastify";
import {useState} from "react";

import { TextField } from '@/components/ui/textField'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {Typography} from "@/components/ui/typography";
import {useNavigate, useParams} from "react-router-dom";
import {Card} from "@/components/ui/card";
import {newPasswordSchema} from "@/components/auth/createNewPassword/helpers/newPasswordSchema";
import {paths} from "@/routing/routesList/Routes";
import {useStores} from "@/contexts/storeContext/storeContext";

import './createNewPassword.scss'

export type FormValuesType = z.infer<typeof newPasswordSchema> // Для того что бы не писать типы для формы вручную - z.infer

export const CreateNewPassword = () => {
    const { authStore } = useStores()!
    const navigate = useNavigate()
    const params = useParams();
    const [isSubmitting, setIsSubmitting] = useState(false)
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValuesType>({
    defaultValues: {

    },
    resolver: zodResolver(newPasswordSchema),
  })
    console.log(params)
  const onSubmit = async (data: FormValuesType) => {
      const {password} = data
      try {
            if (params.id) {
                await authStore?.resetPassword(params.id,password)
                setIsSubmitting(true)
                navigate(paths.SIGN_IN)
                toast.success("New Password is success", {
                    position: "top-left"
                })
            } else {
                toast.error("invalid token (reset param)")
            }


      }
      catch (e: any) {
          const errorMessage = e.message
          toast.error(errorMessage, {
              position: "top-left"
          })
      }

  }

  return (

      <Card className="cardContainerCreateNewPassword">
          <Typography variant={"h1"}>Create New Password</Typography>
          <form className="formContainerRecoverPassword" onSubmit={handleSubmit(onSubmit)}>
              <TextField
                  className="textField"
                  {...register('password')}
                  errorMessage={errors.password?.message}
                  label={'Password'}
                  variant={'password'}
              />
              <Typography variant={'body2'} className="newPasswordText" >
                Create new password and we will send you further instructions to email
              </Typography>
              <Button className="submit"
                      type={'submit'}
                      fullWidth={true}
                      disabled={isSubmitting}
              >
                 Create New Password
              </Button>
          </form>
      </Card>
  )
}
