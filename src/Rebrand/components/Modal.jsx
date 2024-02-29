import { useState, useEffect } from 'react'
import img1 from "../../assets/AI_1.jpg"
import img2 from "../../assets/AI_2.jpg"
import { FaCheck, FaCircleXmark } from 'react-icons/fa6';
import { ContactForm } from '../../components/ContactForm';


export const Modal = ({ trigger, contactAction }) => {
    const [closed, setClosed] = useState();
    const [switchImg, setswitchImg] = useState();
    const [contact, setContact] = useState()

    useEffect(() => {
        setClosed(trigger);
        setContact(contactAction);
    }, [trigger, contactAction]);

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
            {closed && <div className="w-screen h-screen flex  gap-5 justify-center my-5 items-center ">
                <img onClick={imgToggle} src={switchImg ? img1 : img2} alt="image" className=' h-2/4 rounded-2xl cursor-pointer' />

                <div className='pt-12 px-4 flex flex-col justify-center flex-wrap'>
                    <p className='lg:text-3xl text-md md:text-md font-[Poppins] w-34 text-white '> Peter Samuel Edidiong</p>
                    <div className='font-bold pt-5'>Lagos, Nigeria.</div>
                    <div className=' py-8 space-x-2 flex items-center gap-5'>
                        <div onClick={modalSwitch} className="py-8 text-green-900  font-extrabold font-['Inter] hover:scale-95 active:scale-90 hover:text-white">
                            <FaCheck color="#14532d" className="text-5xl" /><p className='py-2 cursor-pointer'>Accept</p></div>
                        <div onClick={modalSwitch} className="py-8 text-red-900  font-extrabold font-['Inter] hover:scale-95 active:scale-90 hover:text-white">
                            <FaCircleXmark className='space-x-5 text-5xl hover:ring-2 hover:ring-white rounded-full' color="#7f1d1d" /><p className='py-2 cursor-pointer'>Cancel</p></div>
                    </div>

                </div>

            </div>}

            {/* {contact && <div className="bg-white w-fit  p-8 flex justify-items-center items-center ">
                <ContactForm />
            </div>} */}
        </div>
    )
}

