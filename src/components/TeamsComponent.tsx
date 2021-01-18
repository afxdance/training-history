import React from 'react'
import { People, PersonPositions, Teams, Boards } from '../data'
import { PersonPosition } from '../types'
import {TeamComponent} from './TeamComponent'
import "../App.css"

export const TeamsComponent: React.FunctionComponent<{
    // Any prop definitions go here
    changeSpotlight: Function
}> = (props) => {
    
    const teams = Object.keys(Teams).map(id => {
        const team = Teams[id]
        return <TeamComponent team={team} changeSpotlight={props.changeSpotlight} />
    })
    return (
        <React.Fragment>
            <h2>Teams</h2>
            <div className="teams">
                {teams}
            </div>
        </React.Fragment>
    )
}