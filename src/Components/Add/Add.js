import React from 'react';
import root_styles from '../../root.styles';
import Header from './../Header/Header';
import Nav from './../Nav/Nav';
import {boxAdd,boxOption,contentOption} from './Add.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMinusCircle, faPlusCircle, faCalendarPlus, faCalendarMinus} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Add = () => {

return(

<div style={boxAdd}>

<Header/>    
    
<div style={contentOption}>

<div style={{color : root_styles.colorPrimary, fontSize : '1.5rem'}}>Agregar</div>

<Link to='/register/Gasto' style={{textDecoration : 'none'}}><div style={boxOption}><div>Gasto</div><div><FontAwesomeIcon icon={faMinusCircle} style={{fontSize : '1.5rem', color : root_styles.colorTerceary}}/></div></div></Link>
<Link to='/register/Ingreso' style={{textDecoration : 'none'}}><div style={boxOption}><div>Ingreso</div><div><FontAwesomeIcon icon={faPlusCircle} style={{fontSize : '1.5rem', color : root_styles.colorPrimary}}/></div></div></Link>
<Link to='/register/Activo' style={{textDecoration : 'none'}}><div style={boxOption}><div>Activo</div><div><FontAwesomeIcon icon={faCalendarPlus} style={{fontSize : '1.5rem', color : root_styles.colorPrimary}}/></div></div></Link>
<Link to='/register/Pasivo' style={{textDecoration : 'none'}}><div style={boxOption}><div>Pasivo</div><div><FontAwesomeIcon icon={faCalendarMinus}  style={{fontSize : '1.5rem', color : root_styles.colorTerceary}} /></div></div></Link>
    
</div>

<Nav state='disabled'/>    

</div>

)

}

export default Add;