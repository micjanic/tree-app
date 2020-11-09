const { ApolloServer } = require('apollo-server')
const { gql } = require('apollo-server')

const typeDefs = gql`
  type Person {
    id: ID!
    name: String
  }

  input NewPersonInput {
    id: ID
  }

  type Query {
    person: Person!
  }

  type Mutation {
    newPerson(input: NewPersonInput!): Person!
  }
`

const resolvers = {
  Query: {
    person(_, { input }, ctx) {
      console.log(input)
      return { id: 123, name: 'yello johnson' }
    },
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen().then(({ url }) => {
  console.log(`server starts on ${url}`)
})
