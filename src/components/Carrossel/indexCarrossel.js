import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

import "react-alice-carousel/lib/alice-carousel.css";

import './styles.css'
import styles from "./styles/style";

const useStyles = makeStyles(styles);

export default function Parallax(props) {
    const { filter, className, images, style, small } = props;

    let windowScrollTop;
    if (window.innerWidth >= 768) {
        windowScrollTop = window.pageYOffset / 2;
    } else {
        windowScrollTop = 0;
    }
    const [transform, setTransform] = React.useState(
        "translate3d(0," + windowScrollTop + "px,0)"
    );
    React.useEffect(() => {
        if (window.innerWidth >= 768) {
            window.addEventListener("scroll", resetTransform);
        }
        return function cleanup() {
            if (window.innerWidth >= 768) {
                window.removeEventListener("scroll", resetTransform);
            }
        };
    });
    const resetTransform = () => {
        var windowScrollTop = window.pageYOffset / 10;
        setTransform("translate3d(0," + windowScrollTop + "px,0)");
    };
    const classes = useStyles();
    const parallaxClasses = classNames({
        [classes.parallax]: true,
        [classes.filter]: filter,
        [classes.small]: small,
        [className]: className !== undefined
    });

    return (
        <div className={parallaxClasses + "parallax"}
            style={{
                ...style,
                transform: transform
            }}>
            <AliceCarousel
                animationDuration={6000}
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
                       <div style={{width: '100vw', height: 'min-content'}}>
                            <div 
                            className={'carrossel'}
                            style={{
                            ...style,
                            backgroundImage: "url(" + image + ")",
                            transform: transform,backgroundPosition: 'center center', backgroundSize: 'cover'
                        }}/>
                       </div>
                    ))
                }
            </AliceCarousel>
        </div>
    )
}
