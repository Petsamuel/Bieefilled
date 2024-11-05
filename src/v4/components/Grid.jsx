
import React from "react";
import {
    TbBoxAlignRightFilled,
    TbClipboardCopy,
    TbFileBroken,
    TbSignature,
    TbTableColumn,
} from "react-icons/tb";
import { ExpandableCardDemo } from "./List"
import { motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from "./ui/bentoGrid";
import { cn } from "../utils/cn";
import { Timeline } from "./ui/Timeline";
import { StickyScrollRevealDemo } from "./TestCard";
import { Certification } from "./Certification";
import photo from "../../assets/new1.png"


export function BentoGridThirdDemo() {
    return (
        (<BentoGrid className="max-w-6xl mx-auto auto-rows-[20rem] gap-4 ">
            {items.map((item, i) => (
                <BentoGridItem
                    key={i}
                    title={item.title}
                    description={item.description}
                    header={item.header}
                    className={cn("[&>p:text-lg] border-3 ", item.className)}
                    icon={item.icon} />
            ))}
        </BentoGrid>)
    );
}



const SkeletonOne = () => {
    const variants = {
        initial: {
            x: 0,
        },
        animate: {
            x: 10,
            rotate: 5,
            transition: {
                duration: 0.2,
            },
        },
    };
    const variantsSecond = {
        initial: {
            x: 0,
        },
        animate: {
            x: -10,
            rotate: -5,
            transition: {
                duration: 0.2,
            },
        },
    };

    return (
        (
            <motion.div
                initial="initial"
                whileHover="animate"
                className="flex  flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2">

                <motion.div
                    variants={variants}
                    className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-white dark:bg-black">
                    <div
                        className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
                    <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
                </motion.div>
                <motion.div
                    variants={variantsSecond}
                    className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-white dark:bg-black">
                    <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
                    <div
                        className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
                </motion.div>
                <motion.div
                    variants={variants}
                    className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black">
                    <div
                        className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
                    <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
                </motion.div>

            </motion.div>)
    );
};
const SkeletonTwo = () => {

    return (
        (<motion.div
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="flex flex-1 w-full h-full flex-col px-4 relative ">

            <motion.div
                className="flex flex-col items-center space-y-2">

                <div className="border rounded-lg p-2">oendnfndofnodnfodinfoidnfd</div>
                <div className="p-4 border rounded-lg">fiodnfiodnfondofnodnfoidoifndf</div>


            </motion.div>

        </motion.div>)
    );
};
const SkeletonThree = () => {
    const variants = {
        initial: {
            backgroundPosition: "0 50%",
        },
        animate: {
            backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
        },
    };
    return (
        (<motion.div
            initial="initial"
            animate="animate"
            variants={variants}
            transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
            }}
            className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
            style={{
                background:
                    "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
                backgroundSize: "400% 400%",
            }}>
            <motion.div className="h-full w-full rounded-lg"></motion.div>
        </motion.div>)
    );
};
const SkeletonFour = () => {
    const first = {
        initial: {
            x: 20,
            rotate: -5,
        },
        hover: {
            x: 0,
            rotate: 0,
        },
    };
    const second = {
        initial: {
            x: -20,
            rotate: 5,
        },
        hover: {
            x: 0,
            rotate: 0,
        },
    };
    return (
        (<motion.div
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2 ">
            <motion.div
                variants={first}
                className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
                <img
                    src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
                    alt="avatar"
                    height="100"
                    width="100"
                    className="rounded-full h-10 w-10" />
                <p
                    className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
                    Just code in Vanilla Javascript
                </p>
                <p
                    className="border border-red-500 bg-red-100 dark:bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
                    Delusional
                </p>
            </motion.div>
            <motion.div
                className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
                <img
                    src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
                    alt="avatar"
                    height="100"
                    width="100"
                    className="rounded-full h-10 w-10" />
                <p
                    className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
                    Tailwind CSS is cool, you know
                </p>
                <p
                    className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
                    Sensible
                </p>
            </motion.div>
            <motion.div
                variants={second}
                className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
                <img
                    src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
                    alt="avatar"
                    height="100"
                    width="100"
                    className="rounded-full h-10 w-10" />
                <p
                    className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
                    I love angular, RSC, and Redux.
                </p>
                <p
                    className="border border-orange-500 bg-orange-100 dark:bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
                    Helpless
                </p>
            </motion.div>
        </motion.div>)
    );
};
const SkeletonFive = () => {
    const variants = {
        initial: {
            x: 0,
        },
        animate: {
            x: 10,
            rotate: 5,
            transition: {
                duration: 0.2,
            },
        },
    };
    const variantsSecond = {
        initial: {
            x: 0,
        },
        animate: {
            x: -10,
            rotate: -5,
            transition: {
                duration: 0.2,
            },
        },
    };

    return (
        (<motion.div
            initial="initial"
            whileHover="animate"
            className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2">
            <motion.div
                variants={variants}
                className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white dark:bg-black">
                <img
                    src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
                    alt="avatar"
                    height="100"
                    width="100"
                    className="rounded-full h-10 w-10" />
                <p className="text-xs text-neutral-500">
                    There are a lot of cool framerworks out there like React, Angular,
                    Vue, Svelte that can make your life ....
                </p>
            </motion.div>
            <motion.div
                variants={variantsSecond}
                className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black">
                <p className="text-xs text-neutral-500">Use PHP.</p>
                <div
                    className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
            </motion.div>
        </motion.div>)
    );
};
const items = [
    {
        title: "Experience",
        header: < Timeline />,
        className: "md:col-span-4 overflow-y-auto",
        icon: <TbTableColumn className="h-4 w-4 text-neutral-500" />,
    },

    {
        title: "Credentials",
        header: <Certification />,
        className: "md:col-span-4 overflow-y-auto",
        icon: <TbBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
    // {
    //     title: "photo",
    //     header: <img src={photo} className="lg:w-90 w-auto h-auto -ml-4" />,
    //     className: "md:col-span-2 overflow-y-hidden",
    //     icon: <TbBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    // },
    {
        title: "Projects",

        header: <SkeletonOne />,
        className: "md:col-span-3",
        icon: <TbClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
        header: <SkeletonTwo />,
        className: "md:col-span-2 hover:shadow-none border-none px-3",
    },
    {
        title: "Blogs Post",

        header: <SkeletonThree />,
        className: "md:col-span-3",
        icon: <TbSignature className="h-4 w-4 text-neutral-500" />,
    },

];
