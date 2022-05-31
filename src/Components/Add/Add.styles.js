import root_styles from "../../root.styles";

const boxAdd = {

width : '100%',
height : 'auto',


}
const contentOption = {
    height : '100%',
    display : 'flex',
    flexDirection : 'column',
    alignItems : 'center',
    justifyContent : 'space-around'
    
    }
    

const boxOption = {

width : '250px',
height : '80px',
boxShadow : '0px 1px 3px 1px rgba(0,0,0,0.103)',
display : 'flex',
justifyContent : 'space-around',
alignItems : 'center',
color : root_styles.colorSecundary
}

export {boxAdd,boxOption, contentOption}