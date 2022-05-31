import root_styles from "../../root.styles";


const Login_Styles = {
    
display : 'flex',
flexDirection : 'column',
width : '100%',
height : 'auto'

}

const Header = {

    backgroundColor : root_styles.colorPrimary,
    color : 'white',
    width : '100%',
    height : '400px',
    borderRadius : '0px 0px 1.5rem 1.5rem',
    display : 'flex',
    justifyContent : 'space-around',
    alignItems : 'center',
    flexDirection : 'column'


}

const logo = {

    width : '150px'
   
}

const title = {

fontSize : '1.6rem'    

}

const button = {

width : '220px',
height : '65px',
color : 'white',
fontSize : '1.2rem',
border : '0px',
borderRadius : '0.5rem',
backgroundColor : root_styles.colorPrimary,
cursor : 'pointer'

}

const button2 = {

    width : '150px',
    height : '50px',
    color : root_styles.colorPrimary,
    fontSize : '1.2rem',
    border : 'none',
    borderRadius : '0.2rem',
    backgroundColor : 'transparent',
    boxShadow : '0px 0px 1px 2px rgba(0, 0, 0, 0.103)',
    opacity : 0.5

    
    }
    

const boxLogin = {

width : '100%',
height : '200px',    
display : 'flex',
flexDirection : 'column',
alignItems : 'center',
justifyContent : 'space-around',  


}

export {Login_Styles,Header,logo,title,button,boxLogin,button2}