import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";

const CarrouselComponent = ({ title, data }) => {
  return (
    <>
      <h1 className="title">{title}</h1>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        // slidesPerGroup={5}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {data
          ? data?.results?.map((d) => (
              <SwiperSlide className="swipper-div" key={d.id}>
                <figure>
                  <img
                    src={`https://image.tmdb.org/t/p/original${d?.poster_path}`}
                    alt="MoviePoster"
                  />
                  <figcaption>
                    <p>{d?.original_title ? d?.original_title : d?.name}</p>
                  </figcaption>
                </figure>
              </SwiperSlide>
            ))
          : null}
      </Swiper>
    </>
  );
};

export default CarrouselComponent;
