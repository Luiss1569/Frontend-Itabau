import React, { useState, useEffect } from 'react'

import './style.css';

function Galery(props) {
    const images = props.images

    return <>
        {images.map((image) => {
            <div className='masonry'>
                <div className={"box-card"}>
                    <div className={"imgBx"}>
                        <img
                            src={image}
                            alt="..." />
                        <div className={"content"}>
                            

                        </div>
                    </div>
                </div>
            </div>;
        })}


    </>
}

export default Galery;