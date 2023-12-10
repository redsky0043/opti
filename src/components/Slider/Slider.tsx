'use client'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { Navigation, EffectCards } from 'swiper/modules'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-cards'
import {sliderData} from "@/data/data";

export const Slider = () => {
    // const swiper = useSwiper()
    const sliderRef = useRef(null)
    //
    //
    // useEffect(() => {
    //     console.log('sliderRef :', sliderRef.current)
    //     if (sliderRef.current) {
    //         sliderRef.current.classList.add('is-pressed')
    //     }
    //
    // }, [])

    return (
        <section className="slider js-pinned">
            <div className="container">
                <h2 className="h2 slider__headline">
                    Services
                </h2>
                <Swiper
                    loop
                    grabCursor={true}
                    speed={1000}
                    effect={'cards'}
                    spaceBetween={50}
                    slidesPerView={1}
                    cardsEffect={{
                        rotate: false,
                        perSlideOffset: 8,
                        slideShadows: false,
                    }}
                    modules={[Navigation, EffectCards]}
                    className="mySwiper slider__gallery"
                    breakpoints={{
                        1440: {
                            grabCursor: false,
                            // navigation: {
                            //     nextEl: slider,
                            // },
                        },
                    }}
                    onSlideChange={(item) => {

                    }}
                >
                    {sliderData.map(({ title, about }, index) => {
                        const current = index + 1
                        const total = sliderData.length

                        return (
                            <SwiperSlide key={title} className="swiper-slide slider__item">
                                <div className="slider__text">
                                    <div className="slider__counter">
                                        {current}/{total}
                                    </div>
                                    <p className="slider__title">
                                        {title}
                                    </p>
                                    <p className="slider__about">
                                        {about}
                                    </p>
                                </div>
                                <picture className="slider__picture">
                                    <Image
                                        width={1000}
                                        height={1000}
                                        alt="slider media"
                                        className="slider__img"
                                        src={`/img/slider-${current}.jpg`}
                                    />
                                </picture>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
            <div className="circle circle--moved" ref={sliderRef}>
                <div className="circle__wrapper">
                    Next
                </div>
            </div>
        </section>
    )
}
