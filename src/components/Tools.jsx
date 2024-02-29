import { tools } from "./store/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';
export const Tool = () => {
  return (
    <>
      <h4 className="py-4 px-2 mb-3  text-semibold font-[Poppins] text-2xl text-white mt-4">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 border-b-2 text-2xl">
          Tech
        </span>
        nology
      </h4>
      <span className="">

        <Swiper
          modules={[Autoplay, Navigation,]}

          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          spaceBetween={15}
          slidesPerView={5}
          onSwiper={(swipper) => console.log(swipper)}
        >
          {tools.map((value, key) => (
            <SwiperSlide key={key} className="cursor-pointer hover:text-2xl">
              <span>
                <div>
                  <div key={key} className="my-3">
                    <img src={value.svg} alt="alt" className="lg:w-8 lg:h-8 w-5 h-5" />
                    <p className="py-2">{value.name}</p>
                  </div>
                </div>
              </span>
            </SwiperSlide>
          ))}
        </Swiper>

      </span>
    </>
  );
};
