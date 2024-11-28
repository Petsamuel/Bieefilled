import { BsClipboardDataFill } from "react-icons/bs"
import { Heading } from "./Heading"
import { IconContainer } from "./IconContainer"
import { HiDocumentReport } from "react-icons/hi"
import { AiFillDollarCircle } from "react-icons/ai"
import { BiSolidReport } from "react-icons/bi"
import { RiFilePaper2Fill } from "react-icons/ri"
import { Radar } from "./Rader"



export const Services = () => {
    return (
        <section className="flex h-screen flex-col font-Aeonik text-center p-5">
            <Heading title="Services" smalltext="text-white" />

            <div>
                <div className="relative flex h-[35rem] w-full flex-col items-center justify-center space-y-4 overflow-hidden px-4">
                    <div className="mx-auto w-full max-w-3xl">
                        <div className="flex w-full  items-center justify-center space-x-10 md:justify-between md:space-x-0 ">
                            <IconContainer text="Web Development" delay={0.2} />
                            <IconContainer
                                delay={0.4}
                                text="Mobile apps"
                                icon={<AiFillDollarCircle className=" h-8 w-8 text-[#43ffa1]" />}
                            />
                            <IconContainer
                                text="Designing"
                                delay={0.3}
                                icon={<BsClipboardDataFill className=" h-8 w-8 text-[#43ffa1]" />}
                            />
                        </div>
                    </div>
                    <div className="mx-auto w-full max-w-md">
                        <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0 ">
                            <IconContainer
                                text="Maintenence"
                                delay={0.5}
                                icon={<BiSolidReport className=" h-8 w-8 text-[#43ffa1]" />}
                            />
                            <IconContainer
                                text="Server management"
                                icon={
                                    // <HiMiniDocumentArrowUp className=" h-8 w-8 text-slate-600" />
                                    <BiSolidReport className=" h-8 w-8 text-[#43ffa1]" />
                                }
                                delay={0.8}
                            />
                        </div>
                    </div>
                    <div className="mx-auto w-full max-w-3xl">
                        <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0 ">
                            <IconContainer
                                delay={0.6}
                                text="GitHub Integration"
                                icon={<HiDocumentReport className=" h-8 w-8 text-[#43ffa1]" />}
                            />
                            <IconContainer
                                delay={0.7}
                                text="CMS Integration"
                                icon={<RiFilePaper2Fill className=" h-8 w-8 text-[#43ffa1]" />}
                            />
                        </div>
                    </div>

                    <Radar className="absolute -bottom-12 " />
                    <div className="absolute bottom-0 z-[41] h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
                </div>

            </div>
        </section>
    )
}
