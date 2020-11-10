require('dotenv').config()

const { ApolloServer } = require('apollo-server')
const { gql } = require('apollo-server')

const mongoose = require('mongoose')
const Person = require('./models/person')

mongoose.connect(
  `mongodb+srv://mjanicki:${process.env.PASSWORD}@cluster0.hg6so.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
)
mongoose.connection.once('open', () => {
  console.log('connected to database')
})

const typeDefs = gql`
  type Person {
    id: ID
    firstName: String
    lastName: String
    parents: [Person]
  }

  input PersonInput {
    id: ID
    firstName: String
    lastName: String
    parents: [ID]
  }

  type Query {
    person(input: PersonInput!): Person!
    people(input: PersonInput): [Person]!
  }

  type Mutation {
    newPerson(input: PersonInput!): Person!
    updatePerson(input: PersonInput!): [Person]!
  }
`

const resolvers = {
  Query: {
    person(_, { input }, ctx) {
      return ctx.Person.findOne(input)
    },
    people(_, { input }, ctx) {
      return ctx.Person.find(input)
    },
  },
  Mutation: {
    newPerson(_, { input }, ctx) {
      console.log(input)
      const person = ctx.Person.create(input)
      return person
    },
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context() {
    return { Person }
  },
})

server.listen().then(({ url }) => {
  console.log(`server starts on ${url}`)
})
