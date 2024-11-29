import { socials } from '../../components/store/data'



export const Footer = ({classname}) => {
    return (
        <section>
            <hr className="my-6 " />
            <div className="lg:text-lg text-md mt-2 flex flex-col lg:flex-row md:flex-row gap-y-6  lg:justify-between md:justify-between justify-center items-center">
                <p className='hover:text-black cursor-pointer dark:text-gray-100 text-sm'>Samuel Peters ❤ &nbsp; Lagos, Nigeria.</p>
                <p className="flex lg:text-md text-sm dark:text-gray-100 py-2">{socials.map((value, index) => (
                    <a href={value.link} className={`lg:text-2xl px-1 text-md ${classname}`} key={index}> <span>{value.icon}</span></a>
                ))}</p>
            </div>
        </section >
    )
}
