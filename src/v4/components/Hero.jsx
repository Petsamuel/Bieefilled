
import { motion } from "framer-motion";
import { Button } from "./Button";

export function HeroText() {
  return (
    <section className="mb-10 lg:md:pt-[8%] pt-[35dvh] text-center ">
      <motion.div initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }} className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-4xl md:text-5xl lg:text-7xl  py-2 md:py-10 relative z-20 font-bold tracking-tight font-AeonikBold text-white">
        {`I'm`} Samuel Peters <br />
        <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-900 to-[#43ffa1] pt-4 pb-2b lg:md:text-5xl">
          <p className="font-AeonikBold">Creative Web Developer. </p>

        </div>


      </motion.div>
      <motion.p initial={{ opacity: 0.5, y: 100 }}

        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.4,
          duration: 0.8,
          ease: "easeInOut",
        }} className="font-Aeonik max-w-xl mx-auto text-md lg:md:text-md text-neutral-500 dark:text-neutral-400 ">
        Bringing ideas to life with modern frameworks, intuitive design, and seamless functionality.

      </motion.p>
      <motion.div className="flex justify-center" initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.4,
          duration: 0.8,
          ease: "easeInOut",
        }}>
        <Button text="More About me ▿" link="#about" classname="text-xl" />

      </motion.div>



    </section>
  )
}

