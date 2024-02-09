import { Stack } from "../../components/store/data"


export const Stacks = () => {

    return (
        <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-2 ">{Stack.map((value, key) => (
            <div className='flex p-2 gap-x-6 rounded-full ring-1 ring-gray-200 shadow'>
                <div key={key} className='flex mx-4 cursor-pointer items-center font-bold gap-2'>
                    <div className='flex gap-x-1 items-center max-w-content lg:text-2xl text-sm md:text-md'>{value.icon}</div> <div className="lg:text-sm text-xs">{value.name}</div>
                </div>
            </div>
        ))} </div>
    )
}
