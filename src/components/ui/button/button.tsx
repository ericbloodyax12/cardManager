import { ComponentPropsWithoutRef } from 'react'

import s from './button.module.scss'

export type ButtonProps = {
    /**
     * add width: 100% to the 'button' el */
    variant?: 'primary' | 'secondary' | 'tertiary' | 'link'
    fullWidth?: boolean
} & ComponentPropsWithoutRef<'button'> //это пропсы, которые принимает стандартный html-тег button, мы их расширяем своими пропсами
/**
 * js doc - Button component description */
export const Button = ({ variant = 'primary', fullWidth, className, ...rest }: ButtonProps) => {

    return (
        <button className={`${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`} {...rest} />
    )
}