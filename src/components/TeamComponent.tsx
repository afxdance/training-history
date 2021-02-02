import React from 'react'
import "../App.css"
// Hint: import PersonComponent here; it might be useful :)

export const TeamComponent: React.FunctionComponent<{
 
}> = (props) => {
    return (
        <React.Fragment>
            <div className="team">
                <div className="team--name">{/* TODO */}</div>
                <div className="team--pic">{/* TODO */}</div>
                <div className="directors">
                    {/* TODO */}
                </div>
            </div>
        </React.Fragment>
    )
}