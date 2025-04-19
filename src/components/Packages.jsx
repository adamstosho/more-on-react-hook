import React from 'react'

const Packages = ({heading, sub, second, list1, list2, list3, list4, foot, icon, gradientColor, listStyle, marg}) => {
  return (
    <div>
      <div className={`p-4 flex flex-col gap-2 justify-center rounded-lg hover:bg-white/10 ${gradientColor}`}>
      
      <h1 className='text-[32px] font-bold mb-0'>{heading}</h1>

      <p>{sub}</p>

      <p className={`text-[16px] ${marg}`}>{second}</p>

      <ul className={`list-disc ${listStyle}`}>
        <li>{list1}</li>
        <li>{list2}</li>
        <li>{list3}</li>
        <li>{list4}</li>
      </ul>

      <h2 className='text-[24px]'>{foot}</h2>

      <div className='text-[18px] bg-primaryBlue rounded-2xl w-40 text-center p-2 flex items-center justify-center'>{icon}</div>

    </div>

    </div>
  )
}

export default Packages
