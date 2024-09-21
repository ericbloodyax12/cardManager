import {FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";

import {useStores} from "@/contexts/storeContext/storeContext";
import {LoginSchema} from '@/components/auth/login/helpers/loginSchema'
import {Button} from '@/components/ui/button'
import {TextField} from '@/components/ui/textField'
import {paths} from "@/routing/routesList/Routes";
import {CheckboxComponent} from "@/components/ui/ checkbox";
import {Typography} from "@/components/ui/typography";
import {Card} from "@/components/ui/card";

import s from './login-form.module.scss'


export const LoginForm = () => {
    const navigate = useNavigate()
    const {authStore} = useStores()!

    const [formState, setFormState] = useState<LoginSchema>({email: "", password: "", rememberMe: true})

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log("onsubmit")

        try {
            console.log(authStore.signIn)
            const {email, password, rememberMe} = formState!
            await authStore?.signIn(email, password, rememberMe)
            authStore.setIsAuth(true)
            navigate(paths.DECKS)
        } catch (e) {
            throw new Error("ошибка логинизации")
        }

    }
    return (

        <Card className={s.cardContainer}>
            <Typography variant={"h1"}>Sign In</Typography>
            <form className={s.formContainer} onSubmit={onSubmit}>
                <TextField
                    className={s.textField}
                    label={'email'}
                    autoComplete="email"
                    onChange={(e) => {
                        setFormState({
                            ...formState,
                            email: e.target.value
                        })
                    }}
                />
                <TextField
                    className={s.textField}
                    label={'password'}
                    variant={'password'}
                    autoComplete="new-password"
                    onChange={(e) => {
                        setFormState({
                            ...formState,
                            password: e.target.value
                        })
                    }}
                />
                <CheckboxComponent onCheckedChange={(e) => {
                    setFormState({
                        ...formState,
                        rememberMe: !!e
                    })
                }}/>


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
                        navigate('/sign_up')
                    }}>
                        Sign Up
                    </Typography>
                </div>

            </form>
        </Card>
    )
}
