import React from 'react';
import Add from '../Add/Add';
import Balance from '../Balance/Balance';
import Register from '../Register/Register';
import Wallet from '../Wallet/Wallet';
import Login from './../Login/Login';
import {HashRouter as Router, Routes, Route} from "react-router-dom";

const Stack = () =>{

    return(

<Router>

    <Routes>

<Route path='/login' element={<Login/>}/>
<Route path='/wallet' element={<Wallet/>}/>
<Route path='/add' element={<Add/>}/>
<Route path='/balance' element={<Balance/>}/>
<Route path='/register/:category' element={<Register/>}/>
<Route path='/statics' element={<div>Satics</div>}/>
<Route path='*' element={<div>Page not found</div>}/>
<Route path='/' element={<Login/>}/>


    </Routes>

</Router>

    )


}

export default Stack;