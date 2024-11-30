import React from 'react'
import { motion } from "framer-motion"

export const Heading = ({ title, smalltext }) => {
    return (
        <div className="shadow-sm lg:shadow-none z-50 ">
            <motion.div className="relative w-full flex justify-center" initial={{ opacity: 0.5, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }} >
                <h1 className={`'dark:text-white text-black font-AeonikBold uppercase'  ${smalltext}`}>{title}</h1>
                <h1 className={`'font-black text-7xl top-0 font-AeonikBold  absolute text-center -z-0 text-neutral-400 opacity-20 uppercase -mt-5 `}>{title}</h1>

            </motion.div>
        </div>
    )
}

