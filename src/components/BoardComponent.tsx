import React from 'react'
import { People, PersonPositions, Teams } from '../data'
// Hint: import PersonComponent here; it might be useful :)

export const BoardComponent: React.FunctionComponent<{
    // Any prop definitions go here
}> = (props) => {
    // Any component logic goes into the body 
    // Access specific prop by using props.[name] 
    return (
        <React.Fragment>
            <h2>Board</h2>
            <div className="board">
                {/* TODO */}
            </div>
        </React.Fragment>
    )
}