import { useId } from 'react'
import clsx from 'clsx'

export function Logomark({ invert = false, filled = false, ...props }) {
  let id = useId()

  return (
  <></>
    // <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
    //   <rect
    //     clipPath={`url(#${id}-clip)`}
    //     className={clsx(
    //       'h-8 transition-all duration-300',
    //       invert ? 'fill-white' : 'fill-neutral-950',
    //       filled ? 'w-8' : 'w-0 group-hover/logo:w-8'
    //     )}
    //   />
    //   <use
    //     href={`#${id}-path`}
    //     className={invert ? 'stroke-white' : 'stroke-neutral-950'}
    //     fill="none"
    //     strokeWidth="1.5"
    //   />
    //   <defs>
    //     <path
    //       id={`${id}-path`}
    //       d="M3.25 26v.75H7c1.305 0 2.384-.21 3.346-.627.96-.415 1.763-1.02 2.536-1.752.695-.657 1.39-1.443 2.152-2.306l.233-.263c.864-.975 1.843-2.068 3.071-3.266 1.209-1.18 2.881-1.786 4.621-1.786h5.791V5.25H25c-1.305 0-2.384.21-3.346.627-.96.415-1.763 1.02-2.536 1.751-.695.658-1.39 1.444-2.152 2.307l-.233.263c-.864.975-1.843 2.068-3.071 3.266-1.209 1.18-2.881 1.786-4.621 1.786H3.25V26Z"
    //     />
    //     <clipPath id={`${id}-clip`}>
    //       <use href={`#${id}-path`} />
    //     </clipPath>
    //   </defs>
    // </svg>
  )
}

export function Logo({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  ...props
}) {
  return (
   
     <div className='flex flex-row justify-start items-center'>
      <svg version="1.0" width={50} height={79} xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 180.000000 180.000000"
 preserveAspectRatio="xMidYMid meet"
 
 >

<g transform="translate(0.000000,180.000000) scale(0.100000,-0.100000)"
 stroke="none"
className={clsx(
          'h-8 transition-all duration-300',
          invert ? 'fill-white' : 'fill-pink-600',
          filled ? 'w-2' : 'w-0 group-hover/logo:w-8'
        )}
>
<path 

d="M990 1492 l0 -127 -225 -225 c-124 -124 -225 -229 -225 -235 0 -6
101 -111 225 -235 l225 -225 0 -132 0 -133 135 0 135 0 0 140 0 140 -113 0
-112 0 -223 223 -222 222 223 223 222 222 113 0 112 0 0 135 0 135 -135 0
-135 0 0 -128z m235 -12 l0 -95 -97 -3 -98 -3 0 101 0 101 98 -3 97 -3 0 -95z
m0 -1160 l0 -95 -97 -3 -98 -3 0 101 0 101 98 -3 97 -3 0 -95z"/>
</g>
</svg >

<svg className='w-3/4'>
  <g>
  <text 
         x="0" y="80" className={clsx(
          'h-8 transition-all duration-300',
          invert ? 'fill-white' : 'fill-neutral-600',
          filled ? 'w-2' : 'w-0 group-hover/logo:w-8'
        )} font-size="15">   
    <tspan fill="#DF4288">KANIT</tspan>MEDIA
  </text>
  </g>
  </svg>  
  
     </div>

  )
}
