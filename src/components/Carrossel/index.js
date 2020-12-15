import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Slide  from '@material-ui/core/Slide';

// core components
import styles from "./styles/style";
import './styles.css'

const useStyles = makeStyles(styles);

export default function Parallax(props) {
  const { filter, className, images, style, small } = props;

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
    <Slide direction="right" in={true} style={{width: '100%'}}>
      <div
        className={parallaxClasses+ "parallax"}
        style={{
          ...style,
          backgroundImage: "url(" + images[0] + ")",
          transform: transform
        }}
      >
        {/* {props.children} */}
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