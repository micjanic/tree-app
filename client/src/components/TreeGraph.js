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
            parents {
                id
            }
            children {
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

    //console.log(data)

    const rootNodes = data.people.filter(
        (person) => person.parents.length === 0
    )
    console.log(rootNodes)

    return (
        <div className="tree-graph">
            {rootNodes.map((person) => (
                <Node current={person} treeData={data.people} />
            ))}
        </div>
    )
}
