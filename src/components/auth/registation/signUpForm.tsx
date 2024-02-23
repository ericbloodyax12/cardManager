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
import {authServices} from "@/services/api/auth-services";

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
        try {
            const {email, password} = data;
            const formData = new FormData();

            formData.append('email', email);
            formData.append('password', password);

            const signUpPath = '/v1/auth/sign-up';

            const response = await fetch(authServices.baseUrl + signUpPath, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json;charset=utf-8' },
                body: JSON.stringify({email, password})
            });
            console.log('formData',formData)

            if (response.ok) {
                navigate('/login');
            } else {
                // Handle error response
                const errorData = await response.json();
                console.error('Error :', errorData);
            }
        } catch (error) {
            console.error('Error :', error);
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
                    label={'email'}
                />
                <TextField
                    className={s.textField}
                    {...register('password')}
                    errorMessage={errors.confirmPassword?.message} // todo : error message from superRefine in schema
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
