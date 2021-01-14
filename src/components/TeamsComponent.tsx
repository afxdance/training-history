import React from 'react'
import { People, PersonPositions, Teams, Boards } from '../data'
import { PersonPosition } from '../types'
import {TeamComponent} from './TeamComponent'
import "../App.css"

export const TeamsComponent: React.FunctionComponent<{
    // Any prop definitions go here
}> = (props) => {
    
    const teams = Object.keys(Teams).map(id => {
        const team = Teams[id]
        return <TeamComponent team={team} />
    })
    return (
        <div className="teams">
            {teams}
        </div>
    )
}