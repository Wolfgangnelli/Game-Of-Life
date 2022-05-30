import React from 'react'

interface Props {
  items: string[]
}

const InstructionList = (props: Props) => {
  const {items = []} = props

  return (
    <ul>
      {!!items && (
        items.map((item, idx) => <li key={idx} className='list-disc text-left'>{item}</li>)
      )}
  </ul>
  )
}

export default InstructionList