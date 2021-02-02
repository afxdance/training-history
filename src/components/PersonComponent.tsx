/* 
Here, we give you a full list of imports that you should encounter
throughout this project (no component imports, given that this is our base component). 
However, in future components, we expect that you import only the components + data that you need!
*/
import React from 'react'
import "../App.css"
import { People, PersonPositions, Teams } from '../data'
import {Team, PersonPosition, Person, Attachment} from '../types'

export const PersonComponent: React.FunctionComponent<{
    // Any prop definitions go here
}> = (props) => {
    // Any component logic goes into the body 
    // Access specific prop by using props.[name] 
    return (
        <React.Fragment>
            <div className="person" onClick={() => {/* TODO */}}>
            <div className="member--img">
                <img
                    className="board--img"
                    src="afx2.png" // TODO
                    width= "200px"
                    height= "200px"
                />
            </div>
            <div className="member-info">
                <div className="name">{/* TODO */}</div>
                <div className="title">{/* TODO */}</div>
            </div>
        </div>
        </React.Fragment>
    )
}