type SearchIconPropsType = {
  className: string | undefined
}
export const SearchIcon = (props: SearchIconPropsType) => {
  return (
    <svg
      className={props.className}
      fill={'none'}
      height={'24'}
      viewBox={'0 0 24 24'}
      width={'24'}
      xmlns={'http://www.w3.org/2000/svg'}
    >
      <g clipPath={'url(#clip0_5661_1973)'}>
        <path
          d={
            'M20.71 19.29l-3.4-3.39A7.92 7.92 0 0019 11a8 8 0 10-8 8 7.92 7.92 0 004.9-1.69l3.39 3.4a1.002 1.002 0 001.639-.325 1 1 0 00-.219-1.095zM5 11a6 6 0 1112 0 6 6 0 01-12 0z'
          }
          fill={'currentColor'}
        ></path>
      </g>
      <defs>
        <clipPath id={'clip0_5661_1973'}>
          <path d={'M0 0H24V24H0z'} fill={'currentColor'}></path>
        </clipPath>
      </defs>
    </svg>
  )
}
