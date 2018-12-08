import React from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import '../style/BoutonReset.css'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#2d3436'
        }
    },
    typography: {
      useNextVariants: true,
    },
});

class BoutonReset extends React.Component {


    handleReset = () => {
        this.props.liftReset()
    }
    render() {
    return(
        <div className="BoutonReset">
        <MuiThemeProvider theme={theme}>
            <Button 
            variant="fab" 
            mini 
            color="primary" 
            aria-label="Add" 
            className="buttonReset"
            onClick={() => this.handleReset()}
            >
            <i className="material-icons">
                360
            </i>
            </Button>
        </MuiThemeProvider>  
        </div>
    );

    }
}
export default BoutonReset;