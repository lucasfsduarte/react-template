import React from 'react'
import { ApolloProvider } from '@apollo/client'
import client from './graphql/client'

import './global.sass'

import Routes from './routes'

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  )
}

export default App
