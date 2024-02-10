import { useState, useEffect } from 'react'
import img1 from "../../assets/AI_1.png"
import img2 from "../../assets/AI_2.jpg"
import { FaCheck, FaCircleXmark } from 'react-icons/fa6';


export const Modal = ({ trigger }) => {
    const [closed, setClosed] = useState()
    const [switchImg, setswitchImg] = useState(false)

    useEffect(() => (
        setClosed(trigger)
    ), [trigger])

    const modalSwitch = () => {
        setClosed(!close)
    }
    const imgToggle = () => {
        setswitchImg(!switchImg)
    }

    return (
        <div className={closed ? " bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-4 fixed z-50 p-4 overflow-hidden md:inset-0 h-screen max-h-full grid place-content-center w-full duration-300 transform translate-y-screen scale-full origin-[0] bg-[#101010] bg-opacity-40"
            : "hidden"
        }>
            <div className=" w-full max-h-full flex max-w-lg">
                <img onClick={imgToggle} src={switchImg ? img1 : img2} alt="image" className='w-[50%] rounded-2xl cursor-pointer' />


                <div className='pt-16 px-4 flex flex-col'>
                    <p className='lg:text-3xl text-md md:text-md font-[Poppins] w-34 text-white '> Peter Samuel Edidiong</p>
                    <div className='font-bold pt-5'>Lagos, Nigeria.</div>
                    <div className=' py-8 space-x-2 flex items-center gap-5'>
                        <FaCheck color="#14532d" className="text-5xl hover:scale-95 active:scale-90 " />
                        <FaCircleXmark onClick={modalSwitch} className='space-x-5 text-5xl hover:scale-95 active:scale-90' color="#7f1d1d" />
                    </div>

                </div>
            </div>
        </div>
    )
}

