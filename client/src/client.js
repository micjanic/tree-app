import { ApolloClient, InMemoryCache } from '@apollo/client'
import { HttpLink } from 'apollo-link-http'
import gql from 'graphql-tag'

const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache(),
})

export default client
