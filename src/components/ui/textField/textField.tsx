import { ComponentPropsWithoutRef, forwardRef, useState } from 'react'

import { EyeIcon } from '@/components/assets/icons/componentSvg/eye'
import { EyeOffIcon } from '@/components/assets/icons/componentSvg/eyeOff'
import { SearchIcon } from '@/components/assets/icons/componentSvg/search'
import { Typography } from '@/components/ui/typography'
import { clsx } from 'clsx'

import s from './textField.module.scss'
// todo сделать по умолчанию 100% в ширину, а потом уже подгонять под размеры
export type InputProps = {
  errorMessage?: string
  fullWidth?: boolean
  label?: string
  search?: boolean
  variant?: 'default' | 'password' | 'search'
} & ComponentPropsWithoutRef<'input'>

export const TextField = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { className, errorMessage, fullWidth, label, search, variant = 'default', ...rest } = props
  const [isShowPassword, setIsShowPassword] = useState(false)
  // const isPassword = type === 'password'
  // const iconToRender = getIcon(isPassword, isShowPassword)

  // const handleShowPasswordClicked = () => {
  //   setShowPassword(value => !value)
  // }

  const inputClassName = clsx(
    s.input,
    s[variant],
    className,
    fullWidth && s.fullWidth,
    errorMessage && s.error
  )

  return (
    <div className={`${s.inputContainer} ${fullWidth ? s.fullWidth : ''}`}>
      <Typography as={'p'} className={s.label} variant={'body2'}>
        {label}
      </Typography>
      {variant === 'search' && <SearchIcon className={s.icon} />}
      <input
        className={inputClassName}
        type={isShowPassword ? 'text' : variant}
        {...rest}
        ref={ref}
      />

      <button
        className={s.iconbutton} // inputContainer--icon-button
        onClick={() => {
          setIsShowPassword(value => !value)
        }}
      >
        {isShowPassword
          ? variant === 'password' && <EyeOffIcon className={s.eyeIcon} />
          : variant === 'password' && <EyeIcon className={s.eyeIcon} />}
      </button>
      <Typography className={s.error} variant={'caption'}>
        {errorMessage}
      </Typography>
    </div>
  )
})

// function getIcon(isPassword: boolean, showPassword: boolean) {
//   if (!isPassword) {
//     return null
//   }
//   if (showPassword) {
//     return <EyeOffIcon className={s.eyeIcon} />
//   }
//
//   return <EyeIcon className={s.eyeIcon} />
// }
