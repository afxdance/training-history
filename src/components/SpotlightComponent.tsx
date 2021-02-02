import React from 'react'
import "../App.css"
import {Person} from '../types'
import {People} from '../data'

export const SpotlightComponent: React.FunctionComponent<{
    personID: string
}> = (props) => {
    const person: Person = People[props.personID]
    const positionIds: string[] = person["positionIds"]
    var people: string[] = [] // TODO: Change typing here as well :)
    positionIds.forEach(id => {
        people.push(id) // TODO: Delete and use PersonComponent when you implement it!
    })
    return (
        <React.Fragment>
            {people}
        </React.Fragment>
    )
}