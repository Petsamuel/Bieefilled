import { cn } from "../../utils/cn";

export const BentoGrid = ({
    className,
    children
}) => {
    return (
        (<div
            className={cn(
                "mb-2 grid grid-cols-1 lg:md:grid-cols-8 gap-4 mx-auto",
                className
            )}>
            {children}
        </div>)
    );
};

export const BentoGridItem = ({
    className,
    
    title,
    description,
    header,
    icon
}) => {
    return (
        (<div
            className={cn(
                " rounded-xl  group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] border border-1 justify-between flex flex-col space-y-4  bg-gray-50  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10  border-gray-50 ",
                className
            )}>
                {icon &&( <div className={`group-hover/bento:translate-x-2 transition duration-200 flex border w-max px-3 py-1 gap-2 rounded-full items-center font-semibold`}>{icon}
                    <div
                    className="text-sm ">
                    {title}
                    </div>
                </div>)}
            {header}
            {/* <div className="group-hover/bento:translate-x-2 transition duration-200">
              
                <div
                    className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
                    {description}
                </div>
            </div> */}
          
        </div>)
    );
};
