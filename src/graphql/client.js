import { ApolloClient, InMemoryCache } from '@apollo/client'
import { split, HttpLink } from '@apollo/client'
import { getMainDefinition } from '@apollo/client/utilities'
import { WebSocketLink } from '@apollo/client/link/ws'

const { REACT_APP_API_URL, REACT_APP_API_SOCKET_URL } = process.env

const httpLink = new HttpLink({
  uri: REACT_APP_API_URL
})

const wsLink = new WebSocketLink({
  uri: REACT_APP_API_SOCKET_URL,
  options: {
    reconnect: true
  }
})

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query)
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    )
  },
  wsLink,
  httpLink,
)

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache()
})

export default client