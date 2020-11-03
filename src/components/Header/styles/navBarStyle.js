import { container, title } from "../../material-kit-react.js";
import headerLinksStyle from "./headerLinksStyle.js";

const navbarsStyle = theme => ({
  section: {
    padding: "70px 0",
    paddingTop: "0"
  },
  container,
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  navbar: {
    marginBottom: "-20px",
    zIndex: "100",
    position: "relative",
    overflow: "hidden",
    "& header": {
      borderRadius: "0"
    }
  },
  navigation: {
    backgroundPosition: "center center",
    backgroundSize: "cover",
    marginTop: "0",
    minHeight: "740px"
  },
  formControl: {
    margin: "0 !important",
    paddingTop: "0",
  },
  inputRootCustomClasses: {
    margin: "0!important",
    color: "inherit"
  },
  searchIcon: {
    width: "20px",
    height: "20px",
    color: "inherit"
  },
  some:{
    display:"none"
  },
  button:{
    marginRight: 10
  },
  ...headerLinksStyle(theme),
  avatar: {
    marginTop: -7
  },
  imageDropdownButton: {
    padding: "0px",
    top: "4px",
    borderRadius: "50%",
    marginLeft: "5px"
  },
  active:{
    backgroundColor: 'black'
  }
});

export default navbarsStyle;