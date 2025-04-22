import React from 'react'

const Packages = ({heading, sub, second, list1, list2, list3, list4, foot, icon, gradientColor, listStyle, marg}) => {
  return (
    <div className='h-full'>
      <div className={`p-4 md:p-6 flex flex-col gap-2 md:gap-3 justify-center rounded-lg hover:bg-white/10 transition-colors h-full ${gradientColor}`}>
        <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold mb-0'>{heading}</h1>
        
        <p className='text-sm md:text-base'>{sub}</p>
        
        <p className={`text-sm md:text-base ${marg}`}>{second}</p>
        
        <ul className={`list-disc pl-5 md:pl-6 space-y-1 md:space-y-2 ${listStyle}`}>
          <li className='text-sm md:text-base'>{list1}</li>
          <li className='text-sm md:text-base'>{list2}</li>
          <li className='text-sm md:text-base'>{list3}</li>
          <li className='text-sm md:text-base'>{list4}</li>
        </ul>
        
        <h2 className='text-xl md:text-2xl mt-2 md:mt-3'>{foot}</h2>
        
        <div className='text-base md:text-lg bg-primaryBlue rounded-xl md:rounded-2xl w-full max-w-40 text-center p-2 flex items-center justify-center mt-2 md:mt-4'>{icon}</div>
      </div>
    </div>
  )
}

export default Packages