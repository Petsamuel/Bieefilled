import React from 'react'
import { About as about } from '../../components/store/data';
import img from "../../assets/new1.png"
import { motion } from "framer-motion"
import { Heading } from "./Heading"

export const About = () => {
    return (
        <section className="flex lg:h-screen flex-col font-Aeonik text-center pb-5 ">
            <Heading title="About" />
            <div className="my-4 flex lg:flex-row flex-col justify-center gap-4 pt-4 ">
                <div className="basis-1/4 justify-center flex lg:block">
                    <motion.img src={img} className=" lg:w-[20rem] hidden lg:block border rounded-lg" initial={{ opacity: 0.5, x: -400 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                            delay: 0.3,
                            duration: 0.8,
                            ease: "easeIn",
                        }} />
                </div>
                <div className="basis-1/2">
                    <motion.div className="text-justify text-neutral-700" initial={{ opacity: 0.5, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.3,
                            duration: 0.8,
                            ease: "easeInOut",
                        }}>{about.map((val, index) => (
                            <span key={index} className="leading-7"><p >{val.about}</p> <br />
                                <p>{val.more}</p>
                            </span>
                        ))}</motion.div>
                </div>
            </div>

        </section>

    )
}
