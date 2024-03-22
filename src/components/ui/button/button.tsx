import {ComponentPropsWithoutRef, ElementType} from 'react'

import defaultIcon from '@/components/assets/icons/svgIcon/logout.svg'


import s from './button.module.scss'

export type ButtonProps<T extends ElementType> = {
    /**
     * add width: 100% to the 'button' el */
    as?: T
    fullWidth?: boolean
    icon?: string
    variant?: 'link' | 'primary' | 'secondary' | 'tertiary'
    withIcon?: boolean
} & ComponentPropsWithoutRef<T> //это пропсы, которые принимает стандартный html-тег button, мы их расширяем своими пропсами (сейчас это уже дженерик)
/**
 * js doc - Button component description */
export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
    const {
        as: Component = 'button' /* инициализация с переименованием */,
        children,
        className,
        fullWidth,
        icon,
        variant = 'primary',
        withIcon = false,
        ...rest
    } = props

    return (
        <Component className={`${s.button} ${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className} ${s.signUpContainer}`} {...rest}>
            {withIcon && <img alt={'logout icon'} src={icon ?? defaultIcon}/>}
            {children}
        </Component>
    )
}
