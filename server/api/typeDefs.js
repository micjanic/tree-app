import { gql } from 'apollo-server'

export const typeDefs = gql`
    enum Genders {
        MALE
        FEMALE
    }

    type Person {
        id: ID
        firstName: String!
        lastName: String!
        gender: Genders
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
        firstName: String!
        lastName: String!
        gender: Genders
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
        updatePerson(input: PersonInput): Person
        removePerson(input: PersonInput): Person
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
