import React, { useEffect } from 'react'

import './Child.css'

type ChildProps = {
  onToggle?: () => void
}

const Child: React.FC<ChildProps> = React.memo(({ onToggle }) => {
  console.log('render Child')

  useEffect(() => {
    console.log('useEffect Child')
  }, [onToggle])

  return (
    <div className='toggleChildButton' onClick={onToggle}>
      rerender Child button
    </div>
  )
})

export default Child
