type eyeOffIconPropsType = {
  className: string | undefined
}
export const EyeOffIcon = (props: eyeOffIconPropsType) => {
  return (
    <svg
      className={props.className}
      fill={'currentColor'}
      height={'24'}
      viewBox={'0 0 24 24'}
      width={'24'}
      xmlns={'http://www.w3.org/2000/svg'}
    >
      <g clipPath={'url(#clip0_5661_1886)'} fill={'currentColor'}>
        <path
          d={
            'M12 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM15.29 18.12L14 16.78l-.07-.07-1.27-1.27A3.501 3.501 0 018.5 12a4.07 4.07 0 01.06-.61l-2-2L5 7.87a15.89 15.89 0 00-2.87 3.63 1 1 0 000 1c.63 1.09 4 6.5 9.89 6.5h.25a9.48 9.48 0 003.23-.67l-.21-.21zM8.59 5.76l2.8 2.8A4.07 4.07 0 0112 8.5a3.5 3.5 0 013.5 3.5 4.066 4.066 0 01-.06.61l2.68 2.68.84.84a15.89 15.89 0 002.91-3.63 1 1 0 000-1c-.64-1.11-4.16-6.68-10.14-6.5a9.48 9.48 0 00-3.23.67l.09.09z'
          }
        ></path>
        <path
          d={
            'M20.71 19.29L19.41 18l-2-2-9.52-9.53L6.42 5 4.71 3.29a1.004 1.004 0 10-1.42 1.42L5.53 7l1.75 1.7 7.31 7.3.07.07L16 17.41l.59.59 2.7 2.71a1.002 1.002 0 001.639-.325 1 1 0 00-.219-1.095z'
          }
        ></path>
      </g>
      <defs>
        <clipPath id={'clip0_5661_1886'}>
          <path d={'M0 0H24V24H0z'} fill={'currentColor'}></path>
        </clipPath>
      </defs>
    </svg>
  )
}
