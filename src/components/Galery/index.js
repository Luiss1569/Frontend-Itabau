import React from "react";

import Gallery from 'react-grid-gallery'
import "./style.css"

export default function Components(props) {

    function tileViewport(){
        return{
            
        }
    }

    return (
       <div className="container-galery">
            <Gallery images={props.images} backdropClosesModal={true} showLightboxThumbnails={true} tileViewportStyle={tileViewport} enableImageSelection={false} />
       </div>
    );
}