import { gql } from 'apollo-server'

export const typeDefs = gql`
    type Person {
        id: ID
        firstName: String
        lastName: String
        gender: String
        mother: Person
        father: Person
        parents: [ID]
        children: [ID]
        siblings: [ID]
    }

    input PersonInput {
        id: ID
        firstName: String
        lastName: String
        gender: String
        mother: PersonInput
        father: PersonInput
        parents: [PersonInput]
    }

    type Query {
        person(input: PersonInput): Person
        people(input: PersonInput): [Person]
    }

    type Mutation {
        newPerson(
            input: PersonInput!
            mother: PersonInput
            father: PersonInput
        ): Person
        removeAll(
            input: PersonInput
            mother: PersonInput
            father: PersonInput
        ): Person
    }
`
