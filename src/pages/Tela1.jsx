import React from 'react';
import '../sass/Tela1.sass';
import 'fontsource-roboto';
import { Button, Grid, TextField } from '@material-ui/core';
// import { useHistory } from 'react-router-dom';

class Tela1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            texto: ""
        };
    }
    // const history = useHistory();
    render() {
        // const history = useHistory();
        return (
            <div class="tela">
                <Grid item xs={12} className="componentes-tela">
                    <p class="titulo-tela"> Tela 1 </p>
                    <TextField id="outlined-basic" label="Texto" variant="outlined" className="margin-componentes" onChange={(e) => this.setState({'texto': e.target.value})}/>
                    <Button variant="contained" color="primary" className="botao margin-componentes" onClick={() => enviar(this.state.texto)}>
                        Enviar
                    </Button>
                </Grid>
            </div>
        );
    }
}

function enviar(texto) {
    
    alert(texto);
    
    // const apiUrl = 'https://api.github.com/users/hacktivist123/repos';
    // fetch(apiUrl, {
    //     mode: 'cors',
    //     method: 'POST',
    //     body: JSON.stringify(
    //       {
    //         'texto': texto
    //       }
    //     )
    // })
    // .then((response) => response.json())
    // .then((data) => console.log('This is your data', data));

    window.location = "/tela2"
}

export default Tela1;