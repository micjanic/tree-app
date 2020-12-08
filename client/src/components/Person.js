import React, { useState } from 'react'
import gql from 'graphql-tag'
import { useQuery, useMutation } from '@apollo/react-hooks'

const query = gql`
    query Name {
        people {
            id
            firstName
            lastName
        }
    }
`

export default function Person() {
    const [modal, setModal] = useState(false)
    const { data, loading, error } = useQuery(query)

    console.log(data)

    return (
        <div>
            {data.people.map((person) => (
                <>
                    <div>
                        {person.firstName} {person.lastName}
                    </div>
                </>
            ))}
        </div>
    )
}
