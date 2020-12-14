import React from 'react';
import { Carousel } from 'antd';

import "react-alice-carousel/lib/alice-carousel.css";

import './styles.css'

export default function Parallax(props) {
    const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79'
};

    return (
        <Carousel autoplay>
            {
                    props.images.map((image, index) => (
                        <img
                            src={image}
                            style={{
                                ...contentStyle,
                            }}
                             alt="carrossel"
                        >
                        </img>
                    ))
                }
        </Carousel>

    )
}
