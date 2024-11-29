import { FloatingNav } from '../components/ui/floating-navbar'
import { navItems, Review } from '../../components/store/data'
import { HeroText } from '../components/Hero'
import { About } from '../components/About'
import { Services } from '../components/Services'
import { Project } from "../components/Project"
import { Footer } from '../../Rebrand/components/Footer'
import { AnimatedTestimonials } from '../components/ui/animated-testimonia'

export const LandingPage = () => {

  return (
    <main className=" w-full  relative">
      <header>
        <section className=" w-full h-screen bg-[#0f0f0f] pt-[10%]">
          <FloatingNav navItems={navItems} className="font-Aeonik text-white" />
          <section>
            <HeroText />
          </section>

          <section className='flex flex-row justify-self-center mt-[-10rem]'>

            <div className="flex content-center place-content-center">

            </div>
          </section>
        </section>

      </header>
      <section className='m-8 py-[5rem]' id="about">
        <About />
      </section>
      <section className='bg-[#0f0f0f] py-[5rem]' id="service">
        <Services />
      </section>
      <section className='m-8 py-[5rem]'>
        <Project />
      </section>
      <section className='bg-[#0f0f0f] py-[1rem]' id="reviews">
        <AnimatedTestimonials testimonials={Review} />
        <footer className=" lg:m-16 m-6 md:m-8 text-white dark:text-neutral-500">
          <Footer classname="text-white " />
        </footer>
      </section>


    </main >
  )
}

