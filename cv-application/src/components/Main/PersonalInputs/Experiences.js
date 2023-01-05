import React from 'react';

export default function Experience(props) {
    return( 
        <form id={props.id} onChange={props.handleChange}>
        <input type="text" placeholder='Position' id='jobPosition' value={props.jobPosition}></input>
        <input type="text" placeholder='Company' id='jobCompany' value={props.jobCompany}></input>
        <input type="text" placeholder='City' id='jobCity' value={props.jobCity}></input>
        <input type="text" placeholder='Year started' id='jobYearStarted' value={props.jobYearStarted}></input>
        <input type="tel" placeholder='Year finished' id='jobYearFinished' value={props.jobYearFinished}></input>
        <button type="button" onClick={props.decreaseExperienceCount}>Delete Experience</button>
    </form>
    )
}