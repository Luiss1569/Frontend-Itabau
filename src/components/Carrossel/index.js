import React, { useState, useEffect } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Slide  from '@material-ui/core/Fade';

// core components
import styles from "./styles/style";
import './styles.css'

const useStyles = makeStyles(styles);

export default function Parallax(props) {
  const [imgIndex, setImgIndex] = useState(0)
  const [checked, setChecked] = useState(true)
  const { filter, className, children, images, style, small } = props;

  useEffect(() => {
    var cont = 0
    if(images.length > 1){
      const interval = setInterval(() => {
        cont++
        setChecked(false)
        if (cont >= images.length) {
          setImgIndex(0)
          cont = 0
        } else {
          setImgIndex(imgIndex => imgIndex + 1);
        }
        setTimeout(()=>{
          setChecked(true)
        },50)
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [images]);



  let windowScrollTop;
  if (window.innerWidth >= 768) {
    windowScrollTop = window.pageYOffset/2;
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
    <Slide direction="right" in={checked} style={{width: '100%'}}>
      <div
        className={parallaxClasses+ "parallax"}
        style={{
          ...style,
          backgroundImage: "url(" + images[imgIndex] + ")",
          transform: transform
        }}
      >
        {children}
      </div>
    </Slide>
  );
}

Parallax.propTypes = {
  className: PropTypes.string,
  filter: PropTypes.bool,
  children: PropTypes.node,
  style: PropTypes.string,
  image: PropTypes.string,
  small: PropTypes.bool
};