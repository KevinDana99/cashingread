import root_styles from "../../root.styles"

const HeaderStyles = {
    width : '100%',
    height: '70px',
    display : 'flex',
    justifyContent : 'space-around',
    alignItems : 'center',
    backgroundColor : root_styles.colorPrimary,
    color: 'white'
    }

  const boxLogo = {
width : '45%',
display : 'flex',
alignItems : 'center',

  }

    const logo = {

        width : '60px',
        marginRight : '3%',
        marginLeft : '3%'
        
        }

const boxMain = {

width : '55%',
height : '100%',
display : 'flex',
justifyContent : 'flex-end',
alignItems : 'center',
paddingRight : '20px'


}

export {HeaderStyles, logo, boxMain, boxLogo}    