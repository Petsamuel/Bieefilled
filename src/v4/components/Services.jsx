
import { Heading } from "./Heading"
import { IconContainer } from "./IconContainer"
import { HiDocumentReport } from "react-icons/hi"
import { GrHostMaintenance } from "react-icons/gr";
import { Radar } from "./Rader"
import { MarqueePreview } from "./ui/Marquee"
import { FaRankingStar, FaShopify } from "react-icons/fa6"
import { TbSettingsAutomation, TbWritingSign } from "react-icons/tb"



export const Services = () => {
    return (
        <section className="flex  flex-col font-Aeonik text-center p-5 ">
            <Heading title="Services" smalltext="text-white" />

            <div>
                <div className="relative flex bottom-0 h-[25rem] w-full flex-col items-center justify-center space-y-4 overflow-hidden px-4">
                    <div className="mx-auto w-full max-w-3xl">
                        <div className="flex w-full  items-center justify-center space-x-10 md:justify-between md:space-x-0 ">
                            <IconContainer text="Web Development" delay={0.2} />
                            <IconContainer
                                delay={0.4}
                                text="SEO Integration"
                                icon={<FaRankingStar className=" h-8 w-8 text-[#43ffa1]" />}
                            />
                            <IconContainer
                                text="Technical Writing"
                                delay={0.3}
                                icon={<TbWritingSign className=" h-8 w-8 text-[#43ffa1]" />}
                            />
                        </div>
                    </div>
                    <div className="mx-auto w-full max-w-md">
                        <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0 ">
                            <IconContainer
                                text="Maintenence"
                                delay={0.5}
                                icon={<GrHostMaintenance className=" h-8 w-8 text-[#43ffa1]" />}
                            />
                            <IconContainer
                                text="E-Commerce"
                                icon={

                                    <FaShopify className=" h-8 w-8 text-[#43ffa1]" />
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
                                text="AI Automation"
                                icon={<TbSettingsAutomation className=" h-8 w-8 text-[#43ffa1]" />}
                            />
                        </div>
                    </div>

                    <Radar className="absolute -bottom-12 " />
                    <div className="absolute bottom-0 z-[41] h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
                </div>

                <MarqueePreview />

            </div>


        </section>
    )
}
