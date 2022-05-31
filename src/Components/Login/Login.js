import React from 'react';
import root_styles from '../../root.styles';
import {Login_Styles,Header,logo,title,button,boxLogin,button2} from './Login.styles';
import {Link} from "react-router-dom";

const Login = () =>{

return(

<div style={Login_Styles}>
 
<div style={Header}>

<img style={logo} src={"./assets/lx.png"}/>

<div style={title}>Cashing</div>

<div>La mejor forma de administrar tu dinero</div>

</div>

<div style={boxLogin}>
 
<button style={button}>Registrate</button>

<div style={{width : '150px', color: 'grey', fontSize : '0.8rem',display: 'flex', justifyContent: 'space-around'}}>Ya tengo cuenta <div style={{display: 'flex',color : root_styles.colorPrimary}}>Acceder</div></div>

<Link to='/wallet'> <button style={button2}>Omitir</button></Link>

</div>
</div>

)


}

export default Login;