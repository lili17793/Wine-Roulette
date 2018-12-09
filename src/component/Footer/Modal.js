import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import './Modal.css'

class ScrollDialog extends React.Component {
    state = {
        open: false,
        scroll: 'paper',
    };

    handleClickOpen = scroll => () => {
        this.setState({ open: true, scroll });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        return (
        <div>
            <Button onClick={this.handleClickOpen('paper')} className="ML"> Terms and conditions </Button>
            <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            scroll={this.state.scroll}
            aria-labelledby="scroll-dialog-title"
            >
            <DialogTitle id="scroll-dialog-title"> Mentions légales </DialogTitle>
            <DialogContent>
                <DialogContentText>
                <p>Merci de lire attentivement les présentes modalités d'utilisation du présent site avant de le 
                parcourir. En vous connectant sur ce site, vous acceptez sans réserve les présentes modalités.
                Editeur du site</p>

                <p><b>Wine Roulette</b></p>
                <p>par Thomas, Elisa, Philippe, Donovan, Romain, Ben et Camille</p>
                <p>Wild Code School</p>
                <p>11 rue de Poissy</p>
                <p>75005 Paris</p>
                <p>France</p>
                
                <b><p>Créé le : 25/10/2018</p></b>

                <p><b>Hébergeur</b></p>
                <p>Guthub Pages</p>
                <p>https://pages.github.com/</p>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                OK
                </Button>
            </DialogActions>
            </Dialog>
        </div>
        );
    }
}

export default ScrollDialog;