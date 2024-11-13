import React from 'react'
import { About as about } from '../../components/store/data';
import img from "../../assets/new1.png"

export const About = () => {
    return (
        <section className="flex h-screen flex-col font-Aeonik text-center ">
            <div initial={{ opacity: 0.5, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }} className="relative w-full" >
                <h1 className='dark:text-white text-black'>About</h1>
                <h1 className='text-5xl text-bold font-Aeonik uppercase absolute text-center'>ABOUT</h1>

            </div>
            <div className="my-4 flex lg:flex-row flex-col justify-center gap-4">
                <div initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }} className="basis-1/4">
                    <img src={img} className=" w-[20rem] border rounded-lg" />
                </div>
                <div className="basis-1/2">
                    <div className=" leading-6 text-justify text-neutral-700">{about.map((val, index) => (
                        <span key={index}><p >{val.about}</p> <br />
                            <p>{val.more}</p>
                        </span>
                    ))}</div>
                </div>
            </div>

        </section>

    )
}
