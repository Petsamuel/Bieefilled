import React from 'react'
import { certification } from '../../components/store/data'

export const Certification = () => {
    return (
        <div>
            <div className='flex flex-col gap-7 m-2 dark:text-white text-black' >
                {certification.map((value, _) => (
                    <div className="flex items-center justify-between">
                        <div className='flex gap-3 items-center'>
                            <img src={value.svg} className='w-10 h-auto' />
                            <p className='text-sm'>{value.name}</p>
                        </div>
                        <div>
                            <p>
                                {value.year}
                            </p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}
