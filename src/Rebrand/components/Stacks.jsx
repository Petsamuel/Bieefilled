import { Stack } from "../../components/store/data"


export const Stacks = () => {

    return (
        <div className="flex flex-wrap lg:gap-2 gap-2.5 justify-start gap-x-3 gap-y-2">{Stack.map((value, key) => (
            <div className='flex rounded-full border py-2 hover:scale-95 active:scale-90 gap-2'>
                <div key={key} className="flex mx-4 cursor-pointer items-center font-['Poppins'] gap-2.5 ">
                    <div className='flex gap-x-1 items-center max-w-content lg:text-3xl text-md md:text-md'>{value.icon}</div>
                    <div className="lg:text-md md:text-sm text-[.66em]">{value.name}</div>
                </div>
            </div>
        ))} </div>
    )
}
