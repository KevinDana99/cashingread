import React from "react";
import {boxNav, buttonFloat} from "./Nav.styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faWallet, faBalanceScale, faChartLine, faPlus} from '@fortawesome/free-solid-svg-icons';
import root_styles from "../../root.styles";
import {Link, NavLink} from "react-router-dom";


const Nav = (prop) => {

return (

prop.state ?    

<div>    

<div style={boxNav}>

<div style={{color : root_styles.colorSecundary}}><Link to='/wallet' style={{textDecoration : 'none', color: 'gray'}}><FontAwesomeIcon  icon={faWallet}/></Link></div>
<div style={{color : root_styles.colorSecundary}}><Link to='/balance' style={{textDecoration : 'none', color: 'gray'}}><FontAwesomeIcon  icon={faBalanceScale}/></Link></div>
<div style={{color : root_styles.colorSecundary}}><Link to='/statics' style={{textDecoration : 'none', color: 'gray'}}><FontAwesomeIcon  icon={faChartLine}/></Link></div>

</div>
</div>

: 

<div>    
<Link to='/add'><div style={buttonFloat}><FontAwesomeIcon icon={faPlus}/></div></Link>
<div style={boxNav}>

{prop.active == 'wallet' ?

<div style={{color : root_styles.colorSecundary}}><NavLink to='/wallet'  style={{textDecoration : 'none', color: root_styles.colorPrimary}} ><FontAwesomeIcon  icon={faWallet}/></NavLink></div>

: 

<div style={{color : root_styles.colorSecundary}}><NavLink to='/wallet'  style={{textDecoration : 'none', color: 'gray'}} ><FontAwesomeIcon  icon={faWallet}/></NavLink></div>

}

{prop.active == 'balance' ? 

<div style={{color : root_styles.colorSecundary}}><NavLink to='/balance'  style={{textDecoration : 'none', color: root_styles.colorPrimary}} ><FontAwesomeIcon  icon={faBalanceScale}/></NavLink></div>

:

<div style={{color : root_styles.colorSecundary}}><NavLink to='/balance'  style={{textDecoration : 'none', color: 'gray'}} ><FontAwesomeIcon  icon={faBalanceScale}/></NavLink></div>

}

<div style={{color : root_styles.colorSecundary}}><NavLink to='/statics'   style={{textDecoration : 'none', color: 'gray'}} ><FontAwesomeIcon  icon={faChartLine}/></NavLink></div>

</div>
</div>

)

}

export default Nav;