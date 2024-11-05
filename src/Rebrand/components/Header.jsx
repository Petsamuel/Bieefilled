import { useState } from "react"
import { SiBuymeacoffee } from "react-icons/si";
import { Modal } from "./Modal";
import img from "../../assets/image.gif"
// import { Link } from "react-router-dom";


export const Header = () => {
    const [trigger, setTrigger] = useState()
    const [contactTrigger, setContactTrigger] = useState();

    const modalSwitch = () => {
        setTrigger(true)


    }

    return (
        <>
            <section className="absolute">
                <Modal trigger={trigger} contactAction={contactTrigger} />
            </section>

            <section className="flex justify-between lg:py-2 pt-12 pb-6 lg:items-center ">


                <div className="flex flex-col mb-4 gap-y-1">
                    <img src={img} alt="img" className="flex items-center place-content-center rounded-full h-auto w-[30%] cursor-pointer" onClick={modalSwitch} />
                    <div className=" font-black text-3xl font-[Inter] cursor-pointer"> Samuel Peters </div>
                    <div className="lg:text-md md:text-sm text-[.5em]  font-bold"> <span > <a href="#" className="cursor-pointer">@Bieefilled</a> &nbsp;¤ &nbsp;Lagos, Nigeria. </span></div>
                </div>
                <div className="flex  gap-y-2 lg:items-center items-start font-['Inter']">
                    <div className="flex justify-center items-center  ">
                        <a
                            href="https://docs.google.com/document/d/1OMDfHk0rFGpbTEdlQWUivNgdG-4GYvoV/edit?usp=sharing&ouid=116822055537140001259&rtpof=true&sd=true"
                            className="cursor-pointer w-max items-center gap-3 relative flex  ijustify-center p-0.5 mb-2 mr-2 overflow-hidden 
                         font-medium rounded-full  py-2 hover:ring-green-900    transition-all ease-in-out hover:ring-2 border  ring-gray-300 hover:scale-95 active:scale-90"

                        >
                            <span className="cursor-pointer w-max items-center gap-2 flex px-5  transition-all ease-in duration-75  rounded-md group-hover:bg-opacity-0 lg:text-md text-xs font-['Inter']">
                                Resume
                            </span>
                        </a>
                    </div>
                    <div className="lg:block hidden">
                        {/* <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                             Sponsor <span><SiBuymeacoffee color="green" /></span> Sponsore
                        </button> */}
                        <a
                            href="https://www.buymeacoffee.com/bieefilled"
                            className="cursor-pointer  gap-3 relative inline-flex   p-0.5 mb-2 mr-2 overflow-hidden 
                         font-medium  rounded-full dark:text-white text-white py-2 hover:ring-green-900 ease-in-out hover:ring-2 border ring-gray-300  animate-shimmer items-center justify-center border-slate-800 bg-[linear-gradient(110deg,#000000,45%,#1e2631,55%,#000103)] bg-[length:200%_100%]   transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"

                        >
                            <span className=" items-center gap-2 flex relative px-5 ease-in duration-75  rounded-md group-hover:bg-opacity-0  lg:text-md text-xs animate-shimmer transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                                Hire Me
                            </span>
                        </a>


                    </div>



                </div>
            </section></>
    )
}
