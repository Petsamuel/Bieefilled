import img from "../../assets/image.png"
import { SiBuymeacoffee, SiLinkedin } from "react-icons/si";



export const Header = () => {
    return (
        <section className="flex justify-between align-middle items-center">
            <div className="flex flex-col mb-4 gap-y-1">
                <img src={img} alt="img" className="rounded-full h-auto w-[30%]" />
                <div className=" font-black lg:text-3xl md:text-lg text-sm"> Samuel Peters </div>
                <div classNAME="lg:text-md md:text-sm text-xs font-bold text-[101010]"> <span> <a href="#">@Bieefilled</a> &nbsp;¤ &nbsp;Lagos, Nigeria. </span></div>
            </div>
            <div className="flex  gap-y-3 items-center">
                <div className="  ">
                    <a
                        className="  gap-3 relative inline-flex  justify-center p-0.5 mb-2 mr-2 overflow-hidden 
                         font-medium rounded-full text-green-900 py-2 transition-all ease-in-out ring-2  ring-gray-300 hover:scale-95 active:scale-90"
                        href={"Https://linkedIn.com/in/bieefilled"}
                    >
                        <span className=" items-center gap-2 flex relative px-5  transition-all ease-in duration-75  rounded-md group-hover:bg-opacity-0 text-green-900/80 font-bold lg:text-lg text-xs">
                            Connect <SiLinkedin />
                        </span>
                    </a>
                </div>
                <div className=" lg:block hidden">
                    <a
                        className="  gap-3 relative inline-flex  justify-center p-0.5 mb-2 mr-2 overflow-hidden 
                         font-medium  rounded-full text-green-900 py-2 transition-all ease-in-out ring-2 ring-gray-300  hover:scale-95 active:scale-90"
                        href={"https://buymeacoffee.com/bieefilled "}
                    >
                        <span className=" items-center gap-2 flex relative px-5  transition-all ease-in duration-75  rounded-md group-hover:bg-opacity-0 text-green-900 font-bold lg:text-lg text-xs">
                            Sponsor <span><SiBuymeacoffee /></span>
                        </span>
                    </a>

                </div>

            </div>
        </section>
    )
}
