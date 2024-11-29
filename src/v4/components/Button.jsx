
export const Button = ({ text, link, className }) => {
    return (
        <div className='flex justify-center items-center mt-6'>
            {/* buttons */}
            <div className={className}>
                <a
                    href={link}
                    className="  gap-3 relative inline-flex   p-0.5 mb-2 mr-2 overflow-hidden 
                         font-medium  rounded-full dark:text-white text-white py-2  ease-in-out   animate-shimmer items-center justify-center transition-colors bg-transparent"

                >
                    <span className="flex items-center">

                        <div className=" items-center gap-2 flex relative px-5 ease-in duration-75  rounded-md group-hover:bg-opacity-0  lg:text-md text-xs  transition-colors focus:outline-none  ">
                            {text}
                        </div>
                    </span>

                    <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
                </a>
            </div>
        </div>
    )
}

