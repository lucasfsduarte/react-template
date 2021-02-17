import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, TextField } from '@material-ui/core'
import { useMutation, gql } from '@apollo/client'

import './styles.sass'

const CREATED_TASK = gql`
	mutation createTask($title: String!) {
		createTask(title: $title) {
			id
			title
		}
	}
`

// Forma de declarar a página
const AddExample = () => {

	const history = useHistory()

	const [createTask] = useMutation(CREATED_TASK)

	// Forma de criar uma variavel
	const [message, setMessage] = useState('')

	// Exemplo de função para alterar uma variável utilizando um TextField
	const handleChange = (e) => {
		const { value } = e.target

		// Forma de editar uma variavel
		setMessage(value)
	}

	const handleSubmit = (e) => {
		// Precisa disso se estiver usando um form
		e.preventDefault()

		// Utiliza a mutation para criar a nova task
		createTask({ variables: { title: message } }).then(res => console.log(res.data))
	}

	return (
		<div className='add-example-container'>
			<form onSubmit={handleSubmit}>
				<h1>Envio de Mensagens</h1>
				<TextField
					fullWidth
					variant='outlined'
					label='Mensagem'
					onChange={handleChange}
				/>
				<div className='actions'>
					<Button
						fullWidth
						variant='contained'
						color='primary'
						type='submit'
					>
						Enviar
					</Button>
					<Button
						fullWidth
						variant='contained'
						color='primary'
						type='button'
						onClick={() => history.push('/list')}
					>
						Ver mensagem
					</Button>
				</div>
			</form>
		</div>
	)
}

export default AddExample
