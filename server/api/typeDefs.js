import { gql } from 'apollo-server'

export const typeDefs = gql`
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
        person(input: PersonInput): Person
        people(input: PersonInput): [Person]!
    }

    type Mutation {
        newPerson(input: PersonInput!, parents: [ID]): Person!
        removeAll(input: PersonInput, parents: [ID]): Person
    }
`