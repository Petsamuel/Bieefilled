import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import { motion } from "framer-motion";
import {Button } from "./Button"


export function HeroText() {
  return (
    <section className="mb-10 h-full pt-[15dvh]">
      <Button/>
      <motion.div initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }} className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-4xl md:text-5xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        Samuel Peters <br />
        <span className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-900 to-[#43ffa1] py-4">
          <span className="">Creative Web Developer. </span></span>


      </motion.div>
      <motion.p initial={{ opacity: 0.5, y: 100 }}

        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.4,
          duration: 0.8,
          ease: "easeInOut",
        }} className="max-w-xl mx-auto text-md lg:md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
        Bringing ideas to life with modern frameworks, intuitive design, and seamless functionality.

      </motion.p>

    </section>
  )
}

