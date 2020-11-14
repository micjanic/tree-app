import { gql } from 'apollo-server'

export const typeDefs = gql`
    type Person {
        id: ID
        firstName: String
        lastName: String
        mother: Person
        father: Person
        parents: [Person]
        children: [Person]
    }

    input PersonInput {
        id: ID
        firstName: String
        lastName: String
        mother: ID
        father: ID
        parents: [ID]
    }

    type Query {
        person(input: PersonInput): Person
        people(input: PersonInput): [Person]
    }

    type Mutation {
        newPerson(input: PersonInput!, parents: [ID]): Person!
        removeAll(input: PersonInput, parents: [ID]): Person
    }
`
