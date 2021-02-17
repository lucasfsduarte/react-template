import React, { useState, useEffect } from 'react'
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { useSubscription, gql } from '@apollo/client'

import './styles.sass'

// Sigam esse padrão de import
import Card from './components/Card'

const TASK_CREATED = gql`
	subscription taskCreated {
		taskCreated {
			id
			title
		}
	}
`

// Forma de declarar a página
const ListExample = () => {

	// Sempre use o history para mudar de pagina
	const history = useHistory()

	const { data } = useSubscription(TASK_CREATED)
	
	const initialValue = { text: 'Nenhuma mensagem.' }
	// Forma de criar uma variavel
	const [lastUpdate, setLastUpdate] = useState(initialValue)

	useEffect(() => {
		console.log(data?.taskCreated)
		if (data?.taskCreated) {
			setLastUpdate({ text: data?.taskCreated.title })
		} else {
			setLastUpdate(initialValue)
		}
	}, [data]) // Se esta lista estiver vazia ele executa ao carregar o componente
	// Se voce colocar alguma variavel, ele sempre vai executar quando esta
	// variavel alterar

	return (
		<div className='list-example-container'>
			<div className='list-content'>
				<h1>Mensagem em Tempo Real</h1>
				
				<div className='list'>
					<Card data={lastUpdate}/>
				</div>

				<div className='actions'>
					<Button
						fullWidth
						variant='contained'
						color='primary'
						type='button'
						onClick={() => history.goBack()}
					>
						Voltar
					</Button>
				</div>
			</div>
		</div>
	)
}

export default ListExample
