import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from '@/components/ui/typography/typography.module.scss'

export type TypographyProps<T extends ElementType> = {
  /**
   * nothing */
  as?: T
  fullWidth?: boolean
  variant?: T extends 'a'
    ? 'link1' | 'link2'
    : T extends 'p'
    ?
        | 'body1'
        | 'body2'
        | 'caption'
        | 'h1'
        | 'h2'
        | 'h3'
        | 'large'
        | 'overline'
        | 'subtitle1'
        | 'subtitle2'
    : never
} & ComponentPropsWithoutRef<T> //это пропсы, которые принимает стандартный html-тег 'X', мы их расширяем своими пропсами (сейчас это уже дженерик)
/**
 * js doc - Typography component description */
export const Typography = <T extends ElementType = 'a' | 'p'>(props: TypographyProps<T>) => {
  const {
    as: Component = 'p' /* инициализация с переименованием */,
    className,
    variant = 'primary',
    ...rest
  } = props

  return <Component className={`${s[variant]} ${s.typography} ${className}`} {...rest} />
}
