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

    const onSubmit = (data: FormValuesType) => {
        console.log(data)
        console.log(errors.confirmPassword?.message)
    }


    return (
        <Card className={s.cardContainer}>
            <Typography variant={"h1"}>Sign Up</Typography>
            <form className={s.formContainer} onSubmit={handleSubmit(onSubmit)} >
                <TextField
                    className={s.textField}
                    {...register('email')}
                    errorMessage={errors.email?.message}
                    label={'email'}
                />
                <TextField
                    className={s.textField}
                    {...register('password')}
                    errorMessage={errors.confirmPassword?.message}
                    label={'password'}
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
                <div className={s.forgotPasswordContainer}>
                    <Typography variant={'body2'} className={s.forgotPassword} onClick={() => {
                        navigate('/login')
                    }}>Already have an account?</Typography>
                </div>
                <div className={s.signUpContainer}><Typography as={"a"} variant={'link1'} className={s.signUp} onClick={() => {
                    navigate('/login')
                }}>Sign In</Typography></div>
            </form>
        </Card>

    )
}
