import { PromiseProvider } from "mongoose";
import React from "react";
import { balance, balanceAll } from "../../../controllers/balance";
import root_styles from "../../../root.styles";
import { boxStyles, boxSubtitle, boxTitle, boxBalances , boxRegisters} from "./Box.styles";


const Box = (props) => {

const state = props.data;



return(

<div style={boxStyles}>

<div style={boxBalances}>


<div style={boxRegisters}>


<div>{props.title}</div>

<div style={boxTitle}>

{state.map((e)=>{

if (e.category == 'Activo' && props.title == 'Activos') {

return (

<div style={{color : root_styles.colorSecundary}}>+${e.mount}</div>
)
}else if(e.category == 'Ingreso' && props.title == 'Ingresos'){

    return (

        <div style={{color : root_styles.colorSecundary}}>+${e.mount}</div>
        )

}

})}

</div>

</div>


<div style={boxRegisters}>
    
<div style={{color : root_styles.colorTerceary}}>{props.subtitle}</div>

<div style={boxSubtitle}>
{state.map((e)=>{

if (e.category == 'Pasivo' && props.subtitle == 'Pasivos') {

return (

<div style={{color : root_styles.colorSecundary}}>-${e.mount}</div>
)
}else if(e.category == 'Gasto' && props.subtitle == 'Gastos'){

    return (

        <div style={{color : root_styles.colorSecundary}}>-${e.mount}</div>
        )

}

})}
</div>
</div>

</div>

Total : {props.total}
</div>




)

} 

export default Box;