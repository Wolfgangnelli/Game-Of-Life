import React, { ReactNode } from 'react'
import {Link} from 'react-router-dom'

interface Props {
    label: string
    onClick?: () => void
    start?: boolean
    icon?: ReactNode
    href?: string
}

const Button = (props: Props) => {
    const { label = '', onClick = () => undefined, start = false, icon = null, href = null } = props

    const className = "py-2 px-4 mx-1 bg-blue-400 text-white font-semibold rounded-lg hover:bg-blue-500"

  return (
    !!href ? (
      <Link to={href} className={className}>
        {label.toUpperCase()}{" "}{!!icon && icon}
      </Link>
    ) : (
      <button 
      className={className}
      onClick={onClick}
      >{label.toUpperCase()}</button>
    )
  )
}

export default Button