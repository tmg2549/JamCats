import React from 'react'

function JamSession(props) {

return (
    <div>
        JAM Session {props.id}
        {JSON.stringify(props.userObj)}
        <button className="button is-light">ACTIVATE</button>
    </div>
)
}

export default JamSession