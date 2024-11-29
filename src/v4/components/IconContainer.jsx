import { twMerge } from "tailwind-merge";

import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa6";

export const IconContainer = ({ icon, text, delay }) => {
    return (
        <motion.div
            initial={{
                opacity: 0,
                scale: 0.95,
            }}
            animate={{
                opacity: 1,
                scale: 1,
            }}
            transition={{
                duration: 0.2,
                delay: delay ? delay : 0,
            }}
            className={twMerge(
                "relative z-50 flex flex-col items-center justify-center space-y-2"
            )}
        >
            <div className="flex w-8 h-auto lg:h-12 lg:w-12 items-center justify-center rounded-2xl border border-neutral-600 shadow-inner ">
                {icon || <FaReact className=" h-8 w-8 text-[#43ffa1]" />}
            </div>
            <div className=" rounded-md px-2 py-1 md:block font-AeonikBold">
                <div className="text-center text-sm lg:text-md font-bold text-neutral-400">
                    {text || `Web Development`}
                </div>
            </div>
        </motion.div>
    );
};

