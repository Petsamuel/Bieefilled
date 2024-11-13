import React, { useState } from 'react'
import img from "../../assets/new1.png"
import { FloatingNav } from '../components/ui/floating-navbar'
import { navItems } from '../../components/store/data'
import { HeroText } from '../components/Hero'
import { About } from '../components/About'

export const LandingPage = () => {
  
  return (
    <main className="bg-[#0f0f0f] w-full h-screen pt-12 relative">
      <header>
        <section className=" w-full h-screen">
          <FloatingNav navItems={navItems} className="font-Aeonik text-white" />
          <section>
            <HeroText />
          </section>

          <section className='flex flex-row justify-self-center mt-[-10rem]'>
            {/* <VelocityScroll text={"Creative Developer"} default_velocity={5} /> */}
            <div className="flex content-center place-content-center">
              {/* <img src={img} alt="aiii" className='rounded-b-full' /> */}
            </div>
          </section>
        </section>
        
      </header>


      <section className='mx-8'>
        <About />
      </section>
    </main >
  )
}

