import React from 'react'
import Heading from '../components/Heading'
import Work from '../components/Work'
import { WorkData } from '../data/constant'
import Packages from '../components/Packages'
import { PackageData } from '../data/package'

const Home = () => {
  return (
    <div className='text-white flex flex-col gap-4 md:gap-6 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto'>
      <header className='flex flex-col gap-4 md:gap-8 py-6 md:py-10'>
        <Heading>A turn-key approach to continuous user discovery</Heading>
        <p className='text-base md:text-lg'>You've got a lot to take on, so we take user research off your plate</p>
      </header>
      
      <section className='space-y-8 md:space-y-12'>
        <div>
          <h2 className='text-2xl md:text-3xl font-semibold mb-4 md:mb-6'>How We Work</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5'>
            {WorkData.map((work, index) => (
              <Work {...work} key={index}/>
            ))}
          </div>
        </div>
        
        <div>
          <h2 className='text-2xl md:text-3xl font-semibold mb-4 md:mb-6'>Our Packages</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5'>
            {PackageData.map((pack, index) => (
              <Packages 
                {...pack} 
                key={index} 
                gradientColor={index === 0 ? "gradientColor" : ""} 
                listStyle={index === 2 ? "list-none" : ""} 
                marg={index === 2 ? "mb-8" : ""}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home