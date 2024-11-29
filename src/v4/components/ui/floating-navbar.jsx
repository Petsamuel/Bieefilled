import React, { useState } from "react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
} from "framer-motion";
import { cn } from "../../utils/cn";

import Logo from "../Logo";


export const FloatingNav = ({
    navItems,
    className
}) => {
    const { scrollYProgress } = useScroll();

    const [visible, setVisible] = useState(true);

    useMotionValueEvent(scrollYProgress, "change", (current) => {
        // Check if current is not undefined and is a number
        if (typeof current === "number") {
            let direction = current - scrollYProgress.getPrevious();

            if (scrollYProgress.get() < 0.05) {
                setVisible(true);
            } else {
                if (direction < 0) {
                    setVisible(true);
                } else {
                    setVisible(false);
                }
            }
        }
    });

    return (
        (<AnimatePresence mode="wait">
            <motion.div
                initial={{
                    opacity: 1,
                    y: -100,
                }}
                animate={{
                    y: visible ? 0 : -100,
                    opacity: visible ? 1 : 0,
                }}
                transition={{
                    duration: 0.2,
                }}
                className={cn(
                    "flex max-w-fit  fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000]  px-8  items-center justify-center space-x-4 text-neutral-900  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-4 ",
                    className
                )}>
                <Logo className="w-[15dvw] md:w-[5dvw] lg:w-[5dvw] pt-2" />
                {navItems.map((navItem, idx) => (
                    <a
                        key={`link=${idx}`}
                        href={navItem.link}
                        className={cn(
                            "relative dark:text-neutral-50 items-center flex space-x-1 dark:hover:text-neutral-300 hover:text-neutral-500 text-neutral-500 font-Aeonik"
                        )}>
                        <span className="block sm:hidden">{navItem.icon}</span>
                        <span className="hidden sm:block text-sm">{navItem.name}</span>
                    </a>
                ))}
                <button
                    className=" text-sm font-medium relative  dark:border-white/[0.2] text-[#43ffa1] px-4 py-2 rounded-full font-AeonikBold">
                    <a className="text-[#43ffa1] " href="mailto:petsamuel4@gmail.com?subject=Hire Request" >Hire Me!</a>

                </button>
            </motion.div>
        </AnimatePresence>)
    );
};
