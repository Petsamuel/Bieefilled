import { useState } from "react"
import { SiBuymeacoffee } from "react-icons/si";
import { Modal } from "./Modal";
import img from "../../assets/image.gif"


export const Header = () => {
    const [trigger, setTrigger] = useState()

    const modalSwitch = () => {
        setTrigger(true)


    }

    return (
        <section className="flex justify-between lg:py-2 py-12 lg:items-center ">
            <section className="absolute">
                <Modal trigger={trigger} />
            </section>

            <div className="flex flex-col mb-4 gap-y-1">
                <img src={img} alt="img" className="flex items-center place-content-center rounded-full h-auto w-[30%] cursor-pointer" onClick={modalSwitch} />
                <div className=" font-black text-3xl font-[Inter] cursor-pointer"> Samuel Peters </div>
                <div className="lg:text-md md:text-sm text-[.5em]  font-bold"> <span > <a href="#" className="cursor-pointer">@Bieefilled</a> &nbsp;¤ &nbsp;Lagos, Nigeria. </span></div>
            </div>
            <div className="flex  gap-y-3 lg:items-center items-start font-[Inter] space-x-4">
                <div className="flex justify-center items-center  ">
                    <a
                        className="w-max items-center gap-3 relative flex  ijustify-center p-0.5 mb-2 mr-2 overflow-hidden 
                         font-medium rounded-full  py-2 hover:ring-green-900    transition-all ease-in-out hover:ring-2 border  ring-gray-300 hover:scale-95 active:scale-90"

                    >
                        <span className="w-max items-center gap-2 flex px-5  transition-all ease-in duration-75  rounded-md group-hover:bg-opacity-0   lg:text-lg text-xs">
                            Hire Me
                        </span>
                    </a>
                </div>
                <div className="lg:block hidden">
                    <a
                        className="  gap-3 relative inline-flex  justify-center p-0.5 mb-2 mr-2 overflow-hidden 
                         font-medium  rounded-full text-green-900 py-2 hover:ring-green-900 transition-all ease-in-out hover:ring-2 border ring-gray-300  hover:scale-95 active:scale-90"

                    >
                        <span className="text-green-900 items-center gap-2 flex relative px-5  transition-all ease-in duration-75  rounded-md group-hover:bg-opacity-0  lg:text-lg text-xs">
                            Sponsor <span><SiBuymeacoffee color="green" /></span>
                        </span>
                    </a>

                </div>



            </div>
        </section>
    )
}
