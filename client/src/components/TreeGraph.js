import React, { useState } from 'react'
import gql from 'graphql-tag'
import { useQuery, useMutation } from '@apollo/react-hooks'

import Node from './Node'

const ALL_PEOPLE = gql`
    query {
        people {
            id
            firstName
            lastName
        }
    }
`

const ROOT_NODE = gql`
    query {
        people {
            id
            parents {
                id
            }
        }
    }
`

export default function TreeGraph() {
    const [modal, setModal] = useState(false)
    const { data, loading, error } = useQuery(ALL_PEOPLE)

    if (loading) {
        return <div>Loading...</div>
    } else if (error) {
        return <div>error</div>
    }

    return (
        <div>
            <Node treeData={data.people} />
        </div>
    )
}
