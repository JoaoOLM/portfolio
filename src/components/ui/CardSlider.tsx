'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Card from "./Card";

interface Project {
  src: string;
  alt: string;
  name: string;
  description: string;
  link: string;
  side?: boolean;
  button?: boolean;
}

interface CardSliderProps {
  projects: Project[];
  autoplay?: boolean;
  delay?: number;
  navigation?: boolean;
  pagination?: boolean;
  className?: string;
}

const CardSlider = ({ 
  projects, 
  autoplay = true, 
  delay = 5000, 
  navigation = true, 
  pagination = true,
  className = ""
}: CardSliderProps) => {
  return (
    <div className={`w-full px-4 ${className}`}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={"auto"}
        centeredSlides={false}
        navigation={navigation}
        pagination={pagination ? { clickable: true } : false}
        autoplay={autoplay ? { delay: delay, disableOnInteraction: false } : false}
        className="w-full"
        breakpoints={{
          // When window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          // When window width is >= 640px
          640: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          // When window width is >= 768px
          768: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          // When window width is >= 1024px
          1024: {
            slidesPerView: 3,
            spaceBetween: 30
          }
        }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index} className="h-auto">
            <div className="p-2">
              <Card
                src={project.src}
                alt={project.alt}
                name={project.name}
                description={project.description}
                link={project.link}
                side={project.side}
                button={project.button ?? true}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardSlider;