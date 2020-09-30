import React from 'react';

const Overview = (props) => {
    return (
        <ul>
            {props.tasks.map(task => {
                return <li key={props.tasks.indexOf(task)}>{task}</li>
            })}
        </ul>
    )
}

export default Overview;