import React from 'react';
import AliceCarousel from 'react-alice-carousel';

import "react-alice-carousel/lib/alice-carousel.css";

import './style.css'


const r1 = `${window.location.origin}/img/slideshow/r1.jpg`
const r2 = `${window.location.origin}/img/slideshow/r2.jpg`
const r3 = `${window.location.origin}/img/slideshow/r3.jpg`
const r4 = `${window.location.origin}/img/slideshow/r4.jpg`
const r5 = `${window.location.origin}/img/slideshow/r5.jpg`
const r7 = `${window.location.origin}/img/slideshow/r7.jpg`
const r8 = `${window.location.origin}/img/slideshow/r8.jpg`
const r9 = `${window.location.origin}/img/slideshow/r9.jpg`
const r10 = `${window.location.origin}/img/slideshow/r10.jpg`
const r11 = `${window.location.origin}/img/slideshow/r11.jpg`
const r12 = `${window.location.origin}/img/slideshow/r12.jpg`
const r13 = `${window.location.origin}/img/slideshow/r13.jpg`
const r14 = `${window.location.origin}/img/slideshow/r14.jpg`
const r15 = `${window.location.origin}/img/slideshow/r15.jpg`
const r16 = `${window.location.origin}/img/slideshow/r16.jpg`
const r17 = `${window.location.origin}/img/slideshow/r17.jpg`
const r18 = `${window.location.origin}/img/slideshow/r18.jpg`
const r19 = `${window.location.origin}/img/slideshow/r19.jpg`
const r20 = `${window.location.origin}/img/slideshow/r20.jpg`


function Gallery() {

    const images = [r1,r11,r2,r3,r13,r5,r7,r8,r9,r10,r12,r4,r14,r15,r16,r17,r18,r19,r20]

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