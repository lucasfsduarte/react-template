import React, { useState, useEffect } from 'react'
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

// Exemplo de import do graphql, talvez tenha que alterar alguma coisa
// import { exemploFuncao } from '../../generated/graphql'

import './styles.sass'

// Sigam esse padrão de import
import Card from './components/Card'

// Forma de declarar a página
const ListExample = () => {

	// Sempre use o history para mudar de pagina
	const history = useHistory()

	// Forma de criar uma variavel
	const [list, setList] = useState([])

	// Exemplo de uso do graphql
	// const { data, loading, error, refetch } = exemploFuncao({
  //   onCompleted(data) {
	// 		console.log(data)
	// 		// A partir dos dados recuperados, vamos settar a lista
  //     setList(data)
  //   }
  // })

	useEffect(() => {
		const newList = [
			{ text: 'Olá Tudo bem?' },
			{ text: 'Tudo bem meu! Como está sua vida nessa grande quarta feira?' },
		]

		setList(newList)
	}, []) // Se esta lista estiver vazia ele executa ao carregar o componente
	// Se voce colocar alguma variavel, ele sempre vai executar quando esta
	// variavel alterar

	return (
		<div className='list-example-container'>
			<div className='list-content'>
				<h1>Exibição de Textos em Tempo Real</h1>
				
				<div className='list'>
					{list.map((item, index) => (
						<Card data={item} key={index}/>
					))}
				</div>

				<Button
					variant='contained'
					color='primary'
					type='button'
					onClick={() => history.goBack()}
				>
					Voltar
				</Button>
			</div>
		</div>
	)
}

export default ListExample
