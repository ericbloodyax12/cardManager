import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from '@/components/ui/typography/typography.module.scss'

export type TypographyProps<T extends ElementType> = {
  /**
   * nothing */
  as?: T
  fullWidth?: boolean
  variant?:
    | 'body1'
    | 'body2'
    | 'caption'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'large'
    | 'link1'
    | 'link2'
    | 'overline'
    | 'subtitle1'
    | 'subtitle2'
} & ComponentPropsWithoutRef<T> //это пропсы, которые принимает стандартный html-тег button, мы их расширяем своими пропсами (сейчас это уже дженерик)
/**
 * js doc - Typography component description */
export const Typography = <T extends ElementType = 'button'>(props: TypographyProps<T>) => {
  const {
    as: Component = 'p' /* инициализация с переименованием */,
    className,
    variant = 'primary',
    ...rest
  } = props

  return <Component className={`${s[variant]} ${className}`} {...rest} />
}
