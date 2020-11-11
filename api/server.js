require('dotenv').config()

const { ApolloServer, forEachField } = require('apollo-server')
const { gql } = require('apollo-server')

const mongoose = require('mongoose')
const Person = require('./models/person')

mongoose.connect(
  `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.hg6so.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
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

  input ParentInput {
    firstName: String!
    lastName: String!
  }

  input FindPersonInput {
    id: ID
    firstName: String
    lastName: String
    parents: [ParentInput!]
  }

  input NewPersonInput {
    firstName: String!
    lastName: String!
    parents: [NewPersonInput]
  }

  type Query {
    person(input: FindPersonInput!): Person!
    people(input: FindPersonInput): [Person]!
  }

  type Mutation {
    newPerson(input: NewPersonInput!, parents: [ParentInput]): Person!
    removeAll(input: NewPersonInput, parents: [ParentInput]): Person
  }
`

const resolvers = {
  Query: {
    person: (_, { input }, ctx) => {
      return ctx.Person.findOne(input)
    },
    people: (_, { input }, ctx) => {
      return ctx.Person.find(input)
    },
  },
  Mutation: {
    newPerson: (_, { input, parents }, ctx) => {
      return ctx.Person.findOneAndUpdate(input, input, {
        new: true,
        upsert: true,
      })
    },
    removeAll: (_, __, ctx) => {
      console.log('reset DB')
      return ctx.Person.deleteMany({})
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
