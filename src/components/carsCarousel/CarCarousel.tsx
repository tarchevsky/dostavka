'use client'

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import "@/app/swiper.css";

import {Pagination, Navigation, EffectFade} from 'swiper/modules'
import styles from './CarCarousel.module.scss'
import cn from 'clsx'

import Image from 'next/image'
import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import Button from "@/components/button/Button";

const slides = [
    {
        src: '/carousel/1.png',
        alt: 'Подпись к картинке',
        car: 'Фура'
    },
    {
        src: '/carousel/2.png',
        alt: 'Подпись к картинке',
        car: 'Газель'
    },
    {
        src: '/carousel/3.png',
        alt: 'Подпись к картинке',
        car: 'Мини-автобус'
    }
]

const CarCarousel = () => {
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
                clickable: true
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className={cn(styles.carousel, 'carousel w-full')}
        >
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                    <div className='relative flex flex-col gap-4 items-center justify-center'>
                        <Image
                            className='h-[400px]'
                            src={slide.src}
                            alt={slide.alt}
                            width={1000}
                            height={1000}
                            style={{
                                objectFit: 'contain',
                                objectPosition: 'right'
                            }}
                            quality={10}
                        />
                        <div className='text-base'>{slide.car}</div>
                        <Button tag='button' text='Подобрать транспорт' ariaLabel='Октрытие модального окна' />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default CarCarousel
