import {CheckboxComponent} from "@/components/ui/ checkbox";
import s from "@/components/auth/login/login-form.module.scss";
import {Control, useController} from "react-hook-form";

export type ControlledCheckboxComponentType = {
control: Control<{email: string, password: string, rememberMe: boolean}, any>
}
export const ControlledCheckboxComponent = (props:ControlledCheckboxComponentType) => {
    const {
        field: { onChange, value },
    } = useController({ control: props.control, defaultValue: false, name: 'rememberMe' }) // Используем useController из-за того что чекбокс из radix ui не совместим напрямую с register(). Что бы это исправить, воспользуемся хуком useController из react-hook-form:

    return (
        <CheckboxComponent
            checked={value}
            className={s.checkbox}
            label={'remember me'}
            onCheckedChange={onChange}
            withLabel
        />
    );
}

