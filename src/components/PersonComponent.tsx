import React from 'react'
// Hint: Don't forget to import your data!!
import { People, PersonPositions } from "../data"
import { Person, PersonPosition } from "../types"
import "../App.css"

export const PersonComponent: React.FunctionComponent<{
    // Any prop definitions go here
    personPosition: PersonPosition,
    changeSpotlight: Function
}> = (props) => {
    // Any component logic goes into the body 
    const person: Person = People[props.personPosition.personIds[0]]


    // Access specific prop by using props.[name] 
    return (
        <div className="person" onClick={() => {props.changeSpotlight(person.id)}}>
            <div className="member--img">
                <img
                    className="board--img"
                    src={props.personPosition.picture[0].thumbnails.large.url}
                    width= "200px"
                    height= "200px"
                />
            </div>


            <div className="member-info">
                <div className="name">{person.name}</div>
                <div className="title">{props.personPosition.positionTitle}</div>
            </div>
        </div>
    )
}