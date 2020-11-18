import { gql } from 'apollo-server'

export const typeDefs = gql`
    type Person {
        id: ID
        firstName: String
        lastName: String
        gender: String
        birthday: String
        currentAge: String
        mother: Person
        father: Person
        parents: [Person]
        children: [Person]
        siblings: [Person]
    }

    input PersonInput {
        id: ID
        firstName: String
        lastName: String
        gender: String
        birthday: String
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
