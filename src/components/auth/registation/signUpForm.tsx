import {Typography} from "@/components/ui/typography";
import {Card} from "@/components/ui/card";

import s from './sign-up-form.module.scss'
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {signUpSchema} from "@/components/auth/registation/helpers/signUpSchema";
import {z} from "zod";

import {TextField} from "@/components/ui/textField";
import {Button} from "@/components/ui/button";
import {useNavigate} from "react-router-dom";

import {toast} from "react-toastify";
import {authServices} from "@/services/api/auth-services";
import {authStore} from "@/store/authStore/authStore";

export type FormValuesType = z.infer<typeof signUpSchema>
export const SignUpForm = () => {
    const navigate = useNavigate()

    const {
        formState: { errors },
        handleSubmit,
        register,
    } = useForm<FormValuesType>({
        resolver: zodResolver(signUpSchema),
    })

    const onSubmit = async (data: FormValuesType) => {
            const {email, password} = data;
            // const formData = new FormData();
            // formData.append('email', email);
            // formData.append('password', password);

       try {
            await authStore.signUp(email,password)
           navigate('/login')
         toast.success("Registration is success", {
           position: "top-left"
         })
       }
       catch (e: any) {
         const errorMessage = e.message
         toast.error(errorMessage, {
           position: "top-left"
         })
       }
    };

    return (
        <Card className={s.cardContainer}>
            <Typography variant={"h1"}>Sign Up</Typography>
            <form className={s.formContainer} onSubmit={handleSubmit(onSubmit)} id={"signUpForm"} >
                <TextField
                    className={s.textField}
                    {...register('email')}
                    errorMessage={errors.email?.message}
                    label={'Email'}
                />
                <TextField
                    className={s.textField}
                    {...register('password')}
                    errorMessage={errors.confirmPassword?.message}
                    label={'Password'}
                    variant={'password'}
                />
                <TextField
                className={s.textField}
                {...register('confirmPassword')}
                errorMessage={errors.confirmPassword?.message}
                label={'Confirm password'}
                variant={'password'}
            />
                <Button className={s.submit} type={'submit'} fullWidth={true}>
                    Sign Up
                </Button>
                <div className={s.haveAccountContainer}>
                    <Typography variant={'body2'} className={s.haveAccount} onClick={() => {
                        navigate('/login')
                    }}>Already have an account?</Typography>
                </div>
                <div className={s.signInContainer}>
                    <Typography as={"a"} variant={'link1'} className={s.signIn} onClick={() => {
                    navigate('/login')
                }}>Sign In</Typography></div>
            </form>
        </Card>

    )
}
