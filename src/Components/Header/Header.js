import React from "react";
import { HeaderStyles, logo, boxMain, boxLogo } from "../Header/Header.styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEllipsisV} from '@fortawesome/free-solid-svg-icons';

const Header = () => {

return (

    <div style={HeaderStyles}>
      <div style={boxLogo}> 
    <img style={logo} src={'./assets/lx.png'}/>    
    <div>Cashing</div>
    </div> 

    <div style={boxMain}><FontAwesomeIcon icon={faEllipsisV}/></div>
    </div>

)


}

export default Header;