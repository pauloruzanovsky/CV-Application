import React from 'react';

export default function Education(props) {
    return( 
        <form id={props.id} onChange={props.handleChange}>
                <input type="text" placeholder='University name' id='universityName' value={props.universityName}></input>
                <input type="text" placeholder='City' id='universityCity' value={props.universityCity}></input>
                <input type="text" placeholder='Degree' id='universityDegree' value={props.universityDegree}></input>
                <input type="text" placeholder='Subject' id='universitySubject' value={props.universitySubject}></input>
                <input type="text" placeholder='Year started' id='universityYearStarted' value={props.universityYearStarted}></input>
                <input type="tel" placeholder='Year finished' id='universityYearFinished' value={props.universityYearFinished}></input>
                <button type="button" onClick={props.decreaseEducationCount}>Delete Education</button>
            </form>
    )
}