import React from 'react';
import AliceCarousel from 'react-alice-carousel';

import "react-alice-carousel/lib/alice-carousel.css";

import s1 from '../../assets/img/slideshow/s1.jpg'
import s2 from '../../assets/img/slideshow/s2.jpg'
import s3 from '../../assets/img/slideshow/s3.jpg'
import s4 from '../../assets/img/slideshow/s4.jpg'
import s5 from '../../assets/img/slideshow/s5.jpg'
import s6 from '../../assets/img/slideshow/s6.jpg'
import s7 from '../../assets/img/slideshow/s7.jpg'
import s8 from '../../assets/img/slideshow/s8.jpg'
import s9 from '../../assets/img/slideshow/s9.jpg'
import s10 from '../../assets/img/slideshow/s10.jpg'
import s11 from '../../assets/img/slideshow/s11.jpg'
import s12 from '../../assets/img/slideshow/s12.jpg'
import s13 from '../../assets/img/slideshow/s13.jpg'
import s14 from '../../assets/img/slideshow/s14.jpg'
import s15 from '../../assets/img/slideshow/s15.jpg'
import s16 from '../../assets/img/slideshow/s16.jpg'
import s17 from '../../assets/img/slideshow/s17.jpg'
import s18 from '../../assets/img/slideshow/s18.jpg'
import s19 from '../../assets/img/slideshow/s19.jpg'
import s21 from '../../assets/img/slideshow/s21.jpg'
import s22 from '../../assets/img/slideshow/s22.jpg'
import s23 from '../../assets/img/slideshow/s23.jpg'

import './style.css'

function Gallery() {

    const images = [s1,s2,s3,s4,s5,s6,s7,s8,s9,s10,s11,s12,s13,s14,s15,s16,s17,s18,s19,s21,s22,s23]

    return (
        <AliceCarousel
            responsive={{
                0: {
                    items: 2
                },
                600: {
                    items: 3
                },
                1024: {
                    items: 4
                }
            }}
            animationDuration={3000}
            autoPlay={true}
            startIndex={0}
            autoPlayDirection
            disableButtonsControls
            fadeOutAnimation={true}
            autoPlayStrategy={'all'}
            disableDotsControls
            infinite
            mouseTracking
            touchTracking
            
        >
            {
                images.map((image, index) => (
                    <img id='slideImg' src={image} alt={index} style={{pointerEvents: 'none'}} />
                ))
            }
        </AliceCarousel>
    )
}


export default Gallery