import root_styles from "../../root.styles";


const boxNav = {

    width : '100%',
    height : '60px',
    display : 'flex',
    justifyContent : 'space-around', 
    alignItems : 'center',
    position : 'fixed',
    boxShadow : '0px 0px 1px 2px rgba(0, 0, 0, 0.103)',
   
    

}

const buttonFloat =  {
display : 'flex',
justifyContent : 'center',
alignItems : 'center',
width : '55px',
height : '50px',
boxSizing : 'border-box',
backgroundColor : root_styles.colorPrimary,
color : 'white',
borderRadius : '100%',
fontSize : '1.5rem',
position : 'fixed',
bottom : '70px',
right: '5px'


}



export {boxNav ,buttonFloat};