import React from 'react'


const Work = ({ img, title, description }) => {
  return (
    <div className='p-4 flex flex-col gap-3 rounded-lg hover:bg-white/10'>
      <img src={img} alt="" className='h-10 w-10 bg-primaryBlue p-1.5 rounded-full'
      />
      <h3 className='font-bold'>{title}</h3>
      <p className='text-[14px]'>{description}</p>
    </div>
  )
}

export default Work