import root_styles from "../../../root.styles";


const boxStyles = {

width : '100%',  
height : 'auto',
minHeight : '200px',
color : root_styles.colorPrimary,
display : 'flex',
flexDirection : 'column',
justifyContent : 'space-around',
alignItems : 'center',
boxShadow : '0px 1px 0px 1px rgba(0, 0, 0, 0.103)',


}

const boxBalances = {
width : '100%',
display : 'flex',


}

const boxRegisters = {

width : '100%'

}

const boxTitle = {

display : 'flex',
flexDirection : 'column'

}

const boxSubtitle = {

color : root_styles.colorTerceary
}



export {boxStyles, boxSubtitle, boxTitle, boxBalances, boxRegisters}