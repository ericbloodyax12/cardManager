import { ComponentPropsWithoutRef, ElementType } from 'react'

import { Typography } from '@/components/ui/typography'

import s from './button.module.scss'

export type ButtonProps<T extends ElementType> = {
  /**
   * add width: 100% to the 'button' el */
  as?: T
  fullWidth?: boolean
  icon?: string
  variant?: 'link' | 'primary' | 'secondary' | 'tertiary'
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
    ...rest
  } = props

  return (
    <Component className={`${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`} {...rest}>
      {icon && <img src={icon} />}
      <Typography>{children}</Typography>
    </Component>
  )
}
