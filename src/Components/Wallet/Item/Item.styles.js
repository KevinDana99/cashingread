import root_styles from "../../../root.styles";

const boxItem = {

width : '100%',
height : '60px',
display : 'flex',
justifyContent : 'space-around',
alignItems : 'center',
backgroundColor : 'white',
marginTop : '1%',
}

const icoItem = {

color : root_styles.colorPrimary,
display : 'flex',
justifyContent : 'center'
}

const img = {

    width : '30px'

}

const title = {
width : '70%',
minWidth : '200px',
color : root_styles.colorSecundary

}

const mount = {
    color : root_styles.colorTerceary
}

export {boxItem, icoItem, title, mount, img}