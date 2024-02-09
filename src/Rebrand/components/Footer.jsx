import { socials } from '../../components/store/data'



export const Footer = () => {
    return (
        <section>
            <hr className="my-6" />
            <div className="mt-2 flex justify-between text-gray-600">
                <p className='hover:text-black cursor-pointer'>Samuel Peters ❤ ¤ &nbsp; Lagos, Nigeria.</p>
                <p className="flex">{socials.map((value, index) => (
                    <span className="px-2 flex text-2xl hover:text-black">{value.icon}</span>
                ))}</p>
            </div>
        </section>
    )
}
