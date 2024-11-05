
export const Button = () => {
    return (
        <div className='flex justify-center items-center'>
            {/* buttons */}
            <div className=" pt-[15dvh] lg:md:pt-[8rem]">
                <a
                    href="#"
                    className="border-2  gap-3 relative inline-flex   p-0.5 mb-2 mr-2 overflow-hidden 
                         font-medium  rounded-full dark:text-white text-black py-1  ease-in-out   animate-shimmer items-center justify-center bg-[linear-gradient(110deg,#ffffff,45%,#e0e0e0,55%,#ffffff)] bg-[length:200%_100%]   transition-colors bg-transparent"

                >
                    <span className="flex items-center">

                        <div className=" items-center gap-2 flex relative px-5 ease-in duration-75  rounded-md group-hover:bg-opacity-0  lg:text-md text-xs  transition-colors focus:outline-none  ">
                            Available for collaboration
                        </div>
                    </span>

                    <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
                </a>
            </div>
        </div>
    )
}

