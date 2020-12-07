import React from "react";
import Hidden from "@material-ui/core/Hidden";
import logo from '../../assets/img/logo-itabau-picole.png'

export default function LogoImg(){

    return(
        <>
             <Hidden smDown implementation="css"><img src={logo} alt="logo" style={{width: 400, position: 'absolute', bottom: 10, right: 40}}/></Hidden>
             <Hidden smUp implementation="css"><img src={logo} alt="logo" style={{width: 200, position: 'absolute', bottom: 70, right: 20}}/></Hidden>
        </>
    )
}