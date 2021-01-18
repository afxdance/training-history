import React from 'react'
import { People, PersonPositions } from '../data'
import { Person } from "../types";
import {PersonComponent} from "./PersonComponent"

export const SpotlightComponent: React.FunctionComponent<{
    changeSpotlight: Function,
    personID: string
}> = (props) => {
    const person: Person = People[props.personID]
    const positionIds: string[] = person["positionIds"]
    var people: JSX.Element[] = [] // Change typing here as well :)
    positionIds.forEach(id => {
        people.push(<PersonComponent changeSpotlight={props.changeSpotlight} personPosition={PersonPositions[id]}/>) // Delete and use PersonComponent when you implement it!
    })
    return (
        <React.Fragment>
            <h2>Spotlight</h2>
            <div className="spotlight">
                {people}
            </div>
        </React.Fragment>
    )
}