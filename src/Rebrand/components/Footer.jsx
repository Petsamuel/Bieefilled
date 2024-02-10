import { socials } from '../../components/store/data'



export const Footer = () => {
    return (
        <section>
            <hr className="my-6" />
            <div className="mt-2 flex flex-col lg:flex-row md:flex-row gap-y-6  lg:justify-between justify-center items-center">
                <p className='hover:text-black cursor-pointer'>Samuel Peters ❤ ¤ &nbsp; Lagos, Nigeria.</p>
                <p className="flex ">{socials.map((value, index) => (
                    <a href={value.link} className={`lg:text-2xl px-2.5 text-md`}> {value.icon}</a>
                ))}</p>
            </div>
        </section >
    )
}
