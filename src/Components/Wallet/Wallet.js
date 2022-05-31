import {React, useState, useEffect}from "react";
import {boxWallet, Saldo, boxItems} from "./Wallet.styles";
import Item from "./Item/Item";
import Nav from "../Nav/Nav";
import Header from "../Header/Header";
import root_styles from "../../root.styles";
import {getRegisters} from "../../controllers/controller";
import {balance} from "../../controllers/balance";

const Wallet = () =>{

const [data, setData] = useState(null);
const [total, setTotal] = useState(null);

useEffect(async ()=>{

let json = await getRegisters();

setData(json);

const total = balance(json);

setTotal(total);

}, []);

return(

<div style={boxWallet}>

<Header/>

<div style={Saldo}>

  <div style={{color : root_styles.colorSecundary, fontSize : '1.5rem'}}>Saldo</div>  
 
 <div style={{color: root_styles.colorPrimary}}>${total}</div>


    </div>


    <div style={boxItems}>

{data ? 

data.map(e=>{

  if (e.category == 'Gasto'){

    return(<Item title={e.desc} mount={e.mount} signs={'-$'} color={root_styles.colorTerceary}/>)

  }else if(e.category == 'Ingreso'){

    return(<Item title={e.desc} mount={e.mount} signs={'+$'} color={root_styles.colorPrimary}/>)

  }


}) 

: "Cargando.."

}

</div>

<Nav active="wallet"/>
</div> 
)

}


export default Wallet;