import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

import './global.sass'

import Routes from './routes'

const client = new ApolloClient({
  uri: 'http://localhost:3000/api',
  cache: new InMemoryCache()
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  )
}

export default App
