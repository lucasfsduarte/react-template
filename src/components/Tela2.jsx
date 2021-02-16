import React from 'react';
import '../sass/Tela2.sass';
import 'fontsource-roboto';
import { Button, Grid } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';

class Tela2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            texto: "Teste"
        };
    }
    render() {
        return (
            <div class="tela">
                <Grid item xs={12} className="componentes-tela">
                    <p className="titulo-tela"> Tela 2 </p>
                    <Chip
                        avatar={<Avatar>T</Avatar>}
                        label={this.state.texto}
                        clickable
                        color="primary"
                        className="cor-chip"
                    />
                    <Button variant="contained" color="primary" className="botao margin-componentes">
                        Voltar
                    </Button>
                </Grid>
            </div>
        );
    }
}

export default Tela2;