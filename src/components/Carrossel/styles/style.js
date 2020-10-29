const parallaxStyle = {
    filter: {
      "&:before": {
        background: "rgba(0, 0, 0, 0.5)"
      },
      "&:after,&:before": {
        position: "absolute",
        zIndex: "1",
        width: "100%",
        height: "100%",
        display: "block",
        left: "0",
        top: "0",
        content: "''"
      }
    },
    small: {
      height: "200px"
    }
  };
  
  export default parallaxStyle;