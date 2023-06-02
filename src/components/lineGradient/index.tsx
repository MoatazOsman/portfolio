import React from 'react'

type Props = {
    width?: string;
}

const LineGradient = ({width = 'w-full'}: Props) => {
  return (
    <div className={`h-0.5 ${width} bg-gradient-rainblue`}></div>
  )
}

export default LineGradient