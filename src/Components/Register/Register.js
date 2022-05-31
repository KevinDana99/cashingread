import {React, useEffect, useState} from "react";
import {boxRegister, inputRegister,formRegister} from "./Register.styles";
import root_styles from "../../root.styles";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import { button } from "../Login/Login.styles";
import { Link, useParams, useNavigate} from "react-router-dom";
import {addRegister} from "../../controllers/controller";

const Register = () => {

const {category} = useParams();
const history = useNavigate();

const [state, setState] = useState(null);

useEffect(() => {

setState({mount : '',category: category, desc: ''})

}, [])


return (

<div style={boxRegister}>

<Header/>

<div style={{marginTop: '10px', marginBottom: '10px',color : root_styles.colorPrimary, fontSize: '1.7rem'}}>Nuevo registro</div>

{category ?

<div style={formRegister}>

<input style={inputRegister} placeholder="Monto" onKeyUp={(e)=>{state.mount = parseInt(e.target.value)}}/>
<input style={inputRegister} disabled value={category} placeholder="Categoria" onKeyUp={(e)=>{state.category = e.target.value}}/>
<input style={inputRegister} placeholder="Descripcion" onKeyUp={(e)=>{state.desc = e.target.value;}}/>

{category == 'Ingreso' || category == 'Gasto' ?
<button style={button} onClick={async ()=>{await addRegister(state); history('/wallet') }}>Agregar</button>
 : 
<Link to='/Balance'><button style={button} onClick={()=>{addRegister(state)}}>Agregar</button></Link>
}
<Link to='/wallet' style={{textDecoration : 'none'}}><div style={{color : root_styles.colorSecundary}}>Cancelar</div></Link>

</div>

: "cargando.."

}


<Nav state='disabled'/>

</div>
)
}

export default Register;