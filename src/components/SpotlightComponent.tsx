import React from 'react'
import { People, PersonPositions } from '../data'
import { Person } from "../types";

export const SpotlightComponent: React.FunctionComponent<{
    personID: string
}> = (props) => {
    const person: Person = People[props.personID]
    const positionIds: string[] = person["positionIds"]
    var people: string[] = [] // Change typing here as well :)
    positionIds.forEach(id => {
        people.push(id) // Delete and use PersonComponent when you implement it!
    })
    return (
        <React.Fragment>
            {people}
        </React.Fragment>
    )
}