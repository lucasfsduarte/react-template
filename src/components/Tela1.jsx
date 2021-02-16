import React from 'react';
import '../sass/Tela1.sass';
import 'fontsource-roboto';
import { Button, Grid, TextField } from '@material-ui/core';
// import { useHistory } from 'react-router-dom';

class Tela1 extends React.Component {
    // const history = useHistory();
    render() {
        // const history = useHistory();
        return (
            <div class="tela">
                <Grid item xs={12} className="componentes-tela">
                    <p className="titulo-tela"> Tela 1 </p>
                    <TextField id="outlined-basic" label="Texto" variant="outlined" className="margin-componentes"/>
                    <Button variant="contained" color="primary" className="botao margin-componentes">
                        Enviar
                    </Button>
                </Grid>
            </div>
        );
    }
}

export default Tela1;