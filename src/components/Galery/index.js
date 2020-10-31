import React from 'react'

import './style.css';

function Galery(props) {
    const images = props.images

    return <>
        {images.map.forEach((image,index) => {
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