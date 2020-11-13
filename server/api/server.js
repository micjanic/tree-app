import { ApolloServer } from 'apollo-server'
import mongoose from 'mongoose'
import Person from './models/person'
import { resolvers } from './resolvers'
import { typeDefs } from './typeDefs'
require('dotenv').config()

mongoose
  .connect(
    `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.hg6so.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log('connected to database'))
  .then(() => {
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
  })
