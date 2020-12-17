import React, { useState, useEffect, useRef } from 'react'
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
    const [windowWidth, setWindowWidth] = useState(0)
    const treeRef = useRef()

    useEffect(() => {
        const resizeObserver = new ResizeObserver((entry) => {
            setWindowWidth(entry[0].target.offsetWidth)
        })

        treeRef.current && resizeObserver.observe(treeRef.current)
    })

    if (loading) {
        return <div>Loading...</div>
    } else if (error) {
        return <div>error</div>
    }
    const rootNode = data.people.find((person) => person.parents.length === 0)

    return (
        <div className="tree-graph" ref={treeRef}>
            <Node
                currentPerson={rootNode}
                windowWidth={windowWidth}
                treeData={data.people}
            />
        </div>
    )
}
