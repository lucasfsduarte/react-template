import React, { useState } from 'react'
import { Button, TextField } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { useMutation, gql } from '@apollo/client'

import './styles.sass'

const TASK_CREATED = gql`
	mutation createTask($title: String!) {
		createTask(title: $title) {
			id
			title
		}
	}
`

// Forma de declarar a página
const AddExample = () => {

	// Sempre use o history para mudar de pagina
	const history = useHistory()

	const [createTask] = useMutation(TASK_CREATED)

	// Forma de criar uma variavel
	const [nomeVariavel, setNomeVariavel] = useState('')

	// Exemplo de função para alterar uma variável utilizando um TextField
	const handleChange = (e) => {
		const { value } = e.target

		// Forma de editar uma variavel
		setNomeVariavel(value)
	}

	const handleSubmit = (e) => {
		// Precisa disso se estiver usando um form
		e.preventDefault()

		// Utiliza a mutation para criar a nova task
		createTask({ variables: { title: nomeVariavel } }).then(res => console.log(res.data))
	
		history.push('/list') // Vai para a página nova
	}

	return (
		<div className='add-example-container'>
			<form onSubmit={handleSubmit}>
				<h1>Exemplo para Adicionar Texto em Tempo Real</h1>
				<TextField
					variant='outlined'
					label='Texto'
					onChange={handleChange}
				/>
				<Button
					variant='contained'
					color='primary'
					type='submit'
				>
					Enviar
				</Button>
			</form>
		</div>
	)
}

export default AddExample
