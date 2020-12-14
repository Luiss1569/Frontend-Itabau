import React from 'react';
import AliceCarousel from 'react-alice-carousel';

import "react-alice-carousel/lib/alice-carousel.css";



import r1 from '../../assets/img/slideshow/r1.jpg'
import r2 from '../../assets/img/slideshow/r2.jpg'
import r3 from '../../assets/img/slideshow/r3.jpg'
import r4 from '../../assets/img/slideshow/r4.jpg'
import r5 from '../../assets/img/slideshow/r5.jpg'
import r7 from '../../assets/img/slideshow/r7.jpg'
import r8 from '../../assets/img/slideshow/r8.jpg'
import r9 from '../../assets/img/slideshow/r9.jpg'
import r10 from '../../assets/img/slideshow/r10.jpg'
import r11 from '../../assets/img/slideshow/r11.jpg'
import r12 from '../../assets/img/slideshow/r12.jpg'
import r13 from '../../assets/img/slideshow/r13.jpg'
import r14 from '../../assets/img/slideshow/r14.jpg'
import r15 from '../../assets/img/slideshow/r15.jpg'
import r16 from '../../assets/img/slideshow/r16.jpg'
import r17 from '../../assets/img/slideshow/r17.jpg'
import r18 from '../../assets/img/slideshow/r18.jpg'
import r19 from '../../assets/img/slideshow/r19.jpg'
import r20 from '../../assets/img/slideshow/r20.jpg'

import './style.css'

function Gallery() {

    const images = [r1,r2,r3,r4,r5,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16,r17,r18,r19,r20]

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