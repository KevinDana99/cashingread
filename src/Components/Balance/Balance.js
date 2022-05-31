import {React, useState, useEffect} from 'react';
import { boxBalance } from "./Balance.styles";
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import root_styles from '../../root.styles';
import Box from './BalanceViews/Box';
import { getRegisters } from '../../controllers/controller';
import { balance,balanceAll } from '../../controllers/balance';

const Balance = () => {

const [data, setData] = useState(null);

useEffect(async ()=> {

const json = await getRegisters();


setData(json);

}, []);


let cash = 0;
let bal = 0;

if (data){


data.map((e)=>{

   
        if (e.category == 'Activo' || e.category == 'Pasivo'){
           
           cash = balanceAll(data);

    return cash
         
            }

            if (e.category == 'Ingreso' || e.category == 'Gasto'){
           
                bal = balance(data);
     
         return bal
              
                 }

})
}else {

console.log('hello')
}

return (
data ? 
<div style={boxBalance}>

<Header/>

<div style={{color : root_styles.colorSecundary, fontSize: '1.5rem', marginTop : '1%'}}>Flujo de caja</div>

{

(bal + cash) > 0 ?

    <div style={{color : root_styles.colorPrimary}}>+${bal + cash}</div>

: 

<div style={{color : root_styles.colorTerceary}}>-${bal + cash}</div>

    }

<div style={{color : root_styles.colorSecundary, fontSize: '1.5rem', marginTop : '1%'}}>Balance</div>



<Box title={'Activos'} subtitle={'Pasivos'} data={data} total={cash}/>

<Box title={'Ingresos'} subtitle={'Gastos'} data={data} total={bal}/>



<Nav active="balance"/>

</div>
: 'Cargando..'
)



}

export default Balance;