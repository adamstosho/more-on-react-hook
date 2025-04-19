import React from 'react'
import Heading from '../components/Heading'
import Work from '../components/Work'
import { WorkData } from '../data/constant'
import Packages from '../components/Packages'
import { PackageData } from '../data/package'


const Home = () => {

  
  return (
    <div className='text-white flex flex-col gap-6'>
      <header className='flex flex-col gap-8 '>
        <Heading> A turn-key approach to continous user discovery</Heading>
        <p>You've got a lot to take on, so we take user research your plate</p>
      </header>
      <section>
        <h2 className='text-3xl font-semibold'>How We Work</h2>
        <div className='grid grid-cols-4 gap-5'>
          {WorkData.map((work, index) => (<Work {...work} key={index}/>
           ))}
        
        </div>
          
        <h2 className='text-3xl font-semibold'>How We Work</h2>
        <div className='grid grid-cols-3 gap-5'>
          {PackageData.map((pack, index) => (<Packages {...pack} key={index} gradientColor ={index === 0 ? "gradientColor" : ""} listStyle={index === 2 ? "list-none" : ""} marg = {index === 2 ? "mb-8" : ""} />
           ))}
        
        </div>  
        
      </section>
    </div>
  )

}


export default Home
