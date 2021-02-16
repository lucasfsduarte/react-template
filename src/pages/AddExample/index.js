import React, { useState } from 'react'
import { Button, TextField } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

import './styles.sass'

// Forma de declarar a página
const AddExample = () => {

	// Sempre use o history para mudar de pagina
	const history = useHistory()

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

		/* TODO */
		/* Enviar este dado para o backend */
		console.log(nomeVariavel)
		
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
