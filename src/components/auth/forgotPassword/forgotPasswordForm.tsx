import {z} from "zod";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import s from "@/components/auth/forgotPassword/forgot-password-form.module.scss";
import {Card} from "@/components/ui/card";
import {Typography} from "@/components/ui/typography";

import {forgotPasswordSchema} from "@/components/auth/forgotPassword/helpers/forgotpasswordSchema";
import {TextField} from "@/components/ui/textField";
import {Button} from "@/components/ui/button";
import {useState} from "react";
import {paths} from "@/routing/routesList/Routes";

import {toast} from "react-toastify";
import {useStores} from "@/contexts/storeContext/storeContext";

export type FormValuesType = z.infer<typeof forgotPasswordSchema> // Для того что бы не писать типы для формы вручную - z.infer

export const ForgotPasswordForm = () => {
    const navigate = useNavigate()
    const [isSubmitting, setIsSubmitting] = useState(false)
const authStore = useStores()

    const {
        formState: { errors },
        handleSubmit,
        register,
    } = useForm<FormValuesType>({
        resolver: zodResolver(forgotPasswordSchema),
    })

    const onSubmit = async (data: FormValuesType) => {
        const {email} = data
        try {
            await authStore?.forgotPassword(email)
            setIsSubmitting(true)
            navigate(paths.CHECK_EMAIL_PAGE, { state: { email: data.email } })
            toast.success("Submit is success", {
                position: "top-left"
            })
        }
        catch (e: any) {
            const errorMessage = e.message
            toast.error(errorMessage, {
                position: "top-left"
            })
        }



    }

    return (
        <Card className={s.cardContainer}>
            <Typography variant={"h1"} className={s.header}>Forgot your password?</Typography>
            <form className={s.formContainer} onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    className={s.textField}
                    {...register('email')}
                    errorMessage={errors.email?.message}
                    label={'email'}
                />
                <div className={s.bodyContainer}>
                    <Typography variant={"body2"} className={s.bodyText}>
                        Enter your email address and we will send you further instructions
                    </Typography>
                </div>
                <Button className={s.submit}
                        type={'submit'}
                        fullWidth={true}
                        disabled={isSubmitting}
                >
                    Send Instructions
                </Button>
                <div className={s.rememberPasswordContainer}>
                    <Typography variant={'body2'} className={s.rememberPassword} onClick={() => {
                        navigate('/login')
                    }}>Did you remember your password?</Typography>
                </div>
                <div className={s.loginContainer}>
                    <Typography as={"a"} variant={'link1'} className={s.loginIn} onClick={() => {
                        navigate('/login')}}>
                        Try logging in
                    </Typography>
                </div>
            </form>
        </Card>

    )
}
