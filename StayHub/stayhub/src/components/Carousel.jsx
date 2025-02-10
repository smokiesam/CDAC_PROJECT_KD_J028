import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules'; 

// Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Carousel = ({ title, slides, slidesPerView = 3, spaceBetween = 10 }) => {
  return (
    <div className="container my-5">
      {title && <h2 className="text-center mb-4">{title}</h2>}

      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 3000 }}
        loop={true}
        navigation={true} // Show navigation arrows
        pagination={false} // Show pagination dots
        spaceBetween={spaceBetween} // Space between slides (in px)
        slidesPerView={slidesPerView} // Number of slides visible
        breakpoints={{
          640: { slidesPerView: 1 }, // 1 slide for smaller screens
          768: { slidesPerView: 2 }, // 2 slides for medium screens
          1024: { slidesPerView: slidesPerView }, // Slides per view for larger screens
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="text-center">
              <img
                src={slide.image}
                alt={slide.title}
                className="img-fluid"
                style={{ maxHeight: '300px', objectFit: 'contain' }}
              />
              {slide.title && <h4 className="mt-2">{slide.title}</h4>}
              {slide.description && <p>{slide.description}</p>}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
