type EyeIconPropsType = {
  className: string | undefined
}
export const EyeIcon = (props: EyeIconPropsType) => {
  return (
    <svg
      className={props.className}
      fill={'currentColor'}
      height={'20'}
      viewBox={'0 0 24 24'}
      width={'20'}
      xmlns={'http://www.w3.org/2000/svg'}
    >
      <g clipPath={'url(#clip0_5661_1894)'} fill={'currentColor'}>
        <path d={'M12 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z'}></path>
        <path
          d={
            'M21.87 11.5c-.64-1.11-4.16-6.68-10.14-6.5-5.53.14-8.73 5-9.6 6.5a1 1 0 000 1c.63 1.09 4 6.5 9.89 6.5h.25c5.53-.14 8.74-5 9.6-6.5a1 1 0 000-1zm-9.87 4a3.5 3.5 0 110-7 3.5 3.5 0 010 7z'
          }
        ></path>
      </g>
      <defs>
        <clipPath id={'clip0_5661_1894'}>
          <path d={'M0 0H24V24H0z'} fill={'currentColor'}></path>
        </clipPath>
      </defs>
    </svg>
  )
}
