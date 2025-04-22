import React from 'react'

const Heading = ({ children }) => {
  return (
    <div className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white'>
      {children}
    </div>
  )
}

export default Heading