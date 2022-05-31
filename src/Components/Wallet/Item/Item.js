import React from "react";
import { boxItem, icoItem, title, mount, img } from "./Item.styles";

const Item = (props) => {

    return (

   <div style={boxItem}>

<div style={icoItem}>
    
    <img style={img} src={'./assets/shopping.png'} />
</div>

<div style={title}>{props.title}</div>

<div style={{color : props.color}}>{props.signs}{props.mount}</div>

   </div>

    )


}

export default Item;