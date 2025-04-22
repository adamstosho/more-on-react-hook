import React from 'react'

const Work = ({ img, title, description }) => {
  return (
    <div className='p-4 flex flex-col gap-2 md:gap-3 rounded-lg hover:bg-white/10 transition-colors h-full'>
      <img 
        src={img} 
        alt="" 
        className='h-8 w-8 md:h-10 md:w-10 bg-primaryBlue p-1 md:p-1.5 rounded-full'
      />
      <h3 className='font-bold text-base md:text-lg'>{title}</h3>
      <p className='text-xs md:text-sm lg:text-base'>{description}</p>
    </div>
  )
}

export default Work