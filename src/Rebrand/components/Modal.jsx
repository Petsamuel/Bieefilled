import { useState, useEffect } from 'react'
import img1 from "../../assets/AI_1.jpg"
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
        <div className={closed ? " bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-4 fixed z-50 p-4 overflow-hidden md:inset-0 h-screen max-h-full grid place-content-center w-full duration-300 transform translate-y-screen scale-full origin-[0] bg-[#101010] bg-opacity-40 top-0 left-0"
            : "hidden"
        }>
            <div className=" w-full max-h-full flex max-w-lg">
                <img onClick={imgToggle} src={switchImg ? img1 : img2} alt="image" className='w-[50%] rounded-2xl cursor-pointer' />


                <div className='pt-16 px-4 flex flex-col justify-center flex-wrap'>
                    <p className='lg:text-3xl text-md md:text-md font-[Poppins] w-34 text-white '> Peter Samuel Edidiong</p>
                    <div className='font-bold pt-5'>Lagos, Nigeria.</div>
                    <div className=' py-8 space-x-2 flex items-center gap-5'>
                        <div onClick={modalSwitch} className="py-8 text-green-900 font-extrabold font-['Inter] hover:scale-95 active:scale-90 hover:text-white"><FaCheck color="#14532d" className="text-5xl " /><p className='py-2 cursor-pointer'>Accept</p></div>
                        <div onClick={modalSwitch} className="py-8 text-red-900 font-extrabold font-['Inter] hover:scale-95 active:scale-90 hover:text-white"><FaCircleXmark className='space-x-5 text-5xl ' color="#7f1d1d" /><p className='py-2 cursor-pointer'>Cancel</p></div>
                    </div>

                </div>
            </div>
        </div>
    )
}

