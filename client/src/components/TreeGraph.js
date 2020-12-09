import React, { useState } from 'react'
import gql from 'graphql-tag'
import { useQuery, useMutation } from '@apollo/react-hooks'

import Node from './Node'

const ALL_PEOPLE = gql`
    query Name {
        people {
            id
            firstName
            lastName
        }
    }
`

export default function TreeGraph() {
    const [modal, setModal] = useState(false)
    const { data, loading, error } = useQuery(ALL_PEOPLE)

    console.log(data)

    if (loading) {
        return <div>Loading...</div>
    } else if (error) {
        return <div>error</div>
    }

    return (
        <div>
            {data &&
                data.people.map((person) => (
                    <>
                        <div>
                            {person.firstName} {person.lastName}
                        </div>
                    </>
                ))}
        </div>
    )
}
