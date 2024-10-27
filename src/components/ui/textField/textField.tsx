import { ComponentPropsWithoutRef, forwardRef, useState } from 'react'
import { EyeIcon } from '@/components/assets/icons/componentSvg/eye'
import { EyeOffIcon } from '@/components/assets/icons/componentSvg/eyeOff'
import { SearchIcon } from '@/components/assets/icons/componentSvg/search'
import { Typography } from '@/components/ui/typography'
import { clsx } from 'clsx'
import { useTheme } from '@/contexts/themeContext'

import './textField.scss'

export type InputProps = {
    errorMessage?: string
    fullWidth?: boolean
    label?: string
    search?: boolean
    variant?: 'default' | 'password' | 'search'
} & ComponentPropsWithoutRef<'input'>

export const TextField = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const {
        children,
        className,
        errorMessage,
        fullWidth,
        label,
        search,
        variant = 'default',
        ...rest
    } = props
    const { themeClassName } = useTheme()
    const [isShowPassword, setIsShowPassword] = useState(false)

    const inputClassName = clsx(
        'input',
        variant,
        className,
        fullWidth && 'fullWidth',
        errorMessage && 'error',
        themeClassName === 'whiteMode' ? 'whiteMode' : 'darkMode'
    )

    return (
        <div className={clsx('inputContainer', fullWidth && 'fullWidth', themeClassName)}>
            <Typography as={'p'} className="label" variant={'body2'}>
                {label}
            </Typography>
            {variant === 'search' && <SearchIcon className="icon" />}
            <input
                className={inputClassName}
                type={isShowPassword ? 'text' : variant}
                {...rest}
                ref={ref}
            />
            <Typography as={'p'} variant={'body1'}>
                {children}
            </Typography>
            <button
                className="inputContainer_icon-button"
                onClick={e => {
                    e.preventDefault()
                    setIsShowPassword(value => !value)
                }}
            >
                {isShowPassword
                    ? variant === 'password' && <EyeOffIcon className="eyeIcon" />
                    : variant === 'password' && <EyeIcon className="eyeIcon" />}
            </button>
            <Typography className="error" variant={'caption'}>
                {errorMessage}
            </Typography>
        </div>
    )
})
