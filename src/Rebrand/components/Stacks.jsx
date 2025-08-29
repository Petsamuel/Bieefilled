import { Stack } from "../../components/store/data"


export const Stacks = () => {

    return (
        <div className="flex flex-wrap lg:gap-3 gap-2.5 justify-start gap-x-4 gap-y-2 ">{Stack.map((value, key) => (
            // new buttons 
            <div className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" key={key}>
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <div className="inline-flex gap-2 h-full w-full cursor-pointer items-center justify-center rounded-full p-4 text-sm font-medium  text-black backdrop-blur-3xl bg-white ">
                    <div className='flex gap-x-1 items-center max-w-content lg:text-3xl text-md md:text-md'>{value.icon}</div><div className="lg:text-md md:text-sm text-[.66em]">{value.name}</div>
                </div>
            </div>
        ))}

        </div>
    )
}
