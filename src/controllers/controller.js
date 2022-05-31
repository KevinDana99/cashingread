const uri = {

herokuGet : 'https://cashing-api.herokuapp.com/getRegisters',
herokuAdd : 'https://cashing-api.herokuapp.com/addRegister',
localGet : 'http://localhost:3001/getRegisters',
localAdd : 'http://localhost:3001/addRegister'

}

const addRegister = async(register) => {

const req = await fetch(uri.herokuAdd, {

method : 'POST',
body : JSON.stringify(register),
headers : {

    "Content-Type" : "application/json"
}

});

const res = await req.text();

console.log(res)

}

const getRegisters = async() => {

    const req = await fetch(uri.herokuGet);
    
    const res = await req.json();
    
return res;
    }


const cancelRegister = () => {


    console.log('register cancelado')


}

export {addRegister,getRegisters,cancelRegister}