import React from 'react';
import AliceCarousel from 'react-alice-carousel';

import "react-alice-carousel/lib/alice-carousel.css";

function Gallery(props) {

    return (
        <AliceCarousel
            responsive={{
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1024: {
                    items: 3
                }
            }}
            duration={400}
            autoPlay={true}
            startIndex={1}
            fadeOutAnimation={true}
            mouseDragEnabled={true}
            dotsDisabled={true}
            buttonsDisabled={true}
            playButtonEnabled={true}
        >
            {
                props.images.map((image, index) => (
                    <img src={image} alt={index} />
                ))
            }
        </AliceCarousel>
    )
}


export default Gallery