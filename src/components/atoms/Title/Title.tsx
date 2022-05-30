import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
    label: string
    path?: string
}

const Title = (props: Props) => {
    const { label = '', path = null } = props

  return (
    <h1 className='text-blue-600 font-bold pt-5 pb-10 text-4xl'>
        {!!path ? (
            <Link to={path}>
                {label}
            </Link>
        ) : label}
      </h1>
  )
}

export default Title