import React from "react";

import Gallery from 'react-grid-gallery'

export default function Components(props) {

   
    return (
        <Gallery images={props.images} backdropClosesModal={true} showLightboxThumbnails={true} enableImageSelection={false} />
    );
}