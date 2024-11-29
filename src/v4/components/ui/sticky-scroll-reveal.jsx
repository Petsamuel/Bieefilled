import React, { useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";
import { TbBrandGithubFilled } from "react-icons/tb";
import { BiLinkExternal } from "react-icons/bi";


export const StickyScroll = ({
    content,
    contentClassName
}) => {
    const [activeCard, setActiveCard] = useState(0);
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
        // target: ref,
        container: ref,
        offset: ["start start", "end start"],
    });
    const cardLength = content.length;

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const cardsBreakpoints = content.map((_, index) => index / cardLength);
        const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
            const distance = Math.abs(latest - breakpoint);
            if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
                return index;
            }
            return acc;
        }, 0);
        setActiveCard(closestBreakpointIndex);

    });


    return (
        (<motion.div
            className=" lg:mt-[3rem] h-[30rem] overflow-y-auto font-Aeonik lg:flex  justify-center relative space-x-[4rem] rounded-md p-5 "
            ref={ref}>
            <div className="div relative flex items-start px-4">
                <div className="max-w-2xl">
                    {content.map((item, index) => (
                        <div key={index} className="my-20">
                            <motion.h2
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: activeCard === index ? 1 : 0.3,
                                }}
                                className="text-2xl font-bold text-neutral-600">
                                {item.name}
                            </motion.h2>
                            <motion.p
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: activeCard === index ? 1 : 0.3,
                                }}
                                className="text-kg text-neutral-600 max-w-sm mt-10 leading-7 text-justify">
                                {item.description}

                            </motion.p>
                            <motion.div initial={{
                                opacity: 0,
                            }}
                                animate={{
                                    opacity: activeCard === index ? 1 : 0.3,
                                }} className="flex gap-3  text-neutral-600 ">
                                {item.stack.map((index, _) => (
                                    <p className="py-3 " key={_}>{index}</p>
                                ))}
                            </motion.div>
                            <div className="flex gap-3 items-center">
                                <a href={item.link} className="text-black font-bold">
                                    <BiLinkExternal src="w-5 h-auto text-black hover:text-black" />
                                </a>
                                <a href="github.com/petsamuel"> <TbBrandGithubFilled className="w-5 h-auto text-neutral-600 hover:text-black" /></a>
                            </div>
                        </div>
                    ))}
                    <div className="h-40" />
                </div>
            </div>

            <div

                className={cn(
                    "hidden lg:block h-auto w-[45dvw] rounded-md sticky top-2 overflow-hidden bg-transparent ",
                    contentClassName
                )}>

                {content[activeCard] && content[activeCard].image && (
                    <img
                        src={content[activeCard].image}
                        alt="Image"
                        width={300}
                        height={300}
                        className="h-full w-full object-contain"
                    />
                )}
            </div>
        </motion.div>)
    );
};
