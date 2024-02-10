import { Stack } from "../../components/store/data"


export const Stacks = () => {

    return (
        <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-2 ">{Stack.map((value, key) => (
            <div className='flex p-2 gap-x-6 rounded-full border py-2 font-black  hover:scale-95 active:scale-90  '>
                <div key={key} className='flex mx-4 cursor-pointer items-center font-bold gap-2 '>
                    <div className='flex gap-x-1 items-center max-w-content lg:text-3xl text-sm md:text-md'>{value.icon}</div> <div className="lg:text-md md:text-sm text-[.54em]">{value.name}</div>
                </div>
            </div>
        ))} </div>
    )
}
