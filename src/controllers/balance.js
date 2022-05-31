
const balanceAll = (json)=>{

    let total = 0;
    
    json.forEach((e) => {
    
 
     if (e.category == 'Activo'){

      total = total + e.mount;
    

     }else if (e.category == 'Pasivo'){

        total = total - e.mount;
    
     }
    
    })
    
    return total;
    }

    
const balance = (json)=>{

    let total = 0;
    
    json.forEach((e) => {
    
    
     if (e.category == 'Ingreso'){
    
      total = total + e.mount;
    
    
     }else if(e.category == 'Gasto') {
    
      total = total - e.mount;
    
     }

    })

    return total;
}
    export {balance,balanceAll};