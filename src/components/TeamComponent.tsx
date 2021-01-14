import React from 'react'
import { People, PersonPositions, Teams } from '../data'
import { Team } from '../types'
// Hint: import PersonComponent here; it might be useful :)
import { PersonComponent } from './PersonComponent'
import "../App.css"

export const TeamComponent: React.FunctionComponent<{
    // Any prop definitions go here
    team: Team
}> = (props) => {
    // Any component logic goes into the body 
    let teamDirectors: JSX.Element[] = []

    if (props.team.positionIds) {
        props.team.positionIds.forEach(positionId => {
            teamDirectors.push(<PersonComponent personPosition = {PersonPositions[positionId]}/>)
        })
    }
    // Access specific prop by using props.[name] 
    return (
        <div className="team">
            {/* HTML goes here */}
            <div>
                <div className="team--name">{props.team.name}</div>

                {props.team.teamPicture ? (
                    <a
                        className="video--link"
                        href={props.team.videoUrl}
                        target="_blank"
                        title="Click to watch on Youtube!"
                    >
                        <img
                        className="team--img"
                        src={props.team.teamPicture[0].thumbnails.large.url}
                        width="400px"
                        height="300px"
                        />
                    </a>
                    ) : (
                    <img
                        className="team--img"
                        src="afx2.png"
                        height={200}
                        style={{ opacity: 0.3 }}
                    />
                )}
            </div>
            <div className="directors">
                {teamDirectors}
            </div>
        </div>
    )
}