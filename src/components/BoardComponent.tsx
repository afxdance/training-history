import React from 'react'
import { People, PersonPositions, Teams, Boards } from '../data'
import { PersonPosition } from '../types'
import {PersonComponent} from './PersonComponent'
import "../App.css"

export const BoardComponent: React.FunctionComponent<{
    // Any prop definitions go here
}> = (props) => {
    const board = Object.values(Boards)[0] // only valid because there is one board in data.tsx; would have to pass in board id in as a prop otherwise
    const persons = board.positionIds.map(id => {
        const position = PersonPositions[id]
        return <PersonComponent personPosition={position} />
    })
    return (
        <div className="board">
            {persons}
        </div>
    )
}