import React from 'react'
import css from '../../../styles/PersonalInputs.css'


export default function PersonalInputs(props) {
    return(
    <>
        <div className='personal-inputs'>
            <h2>Personal Information</h2>
            <form onChange={props.handleChange}>
                <input type="text" placeholder='First Name' id='firstName' value={props.firstName}></input>
                <input type="text" placeholder='Last Name' id='lastName' value={props.lastName}></input>
                <input type="text" placeholder='Title' id ='title' value={props.title}></input>
                <input type="text" placeholder='Address' id='address' value={props.address}></input>
                <input type="tel" placeholder='Phone number' id='phone' value={props.phone}></input>
                <input type="email" placeholder='Email' id='email' value={props.email}></input>
                <textarea type="text" placeholder='Description' id='description' value={props.description}></textarea>
                <button type="button" onClick={() => {alert('hi')}}>Add Photo</button>
            </form>
            <h2>Experience</h2>
            <form onChange={props.handleChange}>
                <input type="text" placeholder='Position' id='jobPosition' value={props.jobPosition}></input>
                <input type="text" placeholder='Company' id='jobCompany' value={props.jobCompany}></input>
                <input type="text" placeholder='City' id='jobCity' value={props.jobCity}></input>
                <input type="text" placeholder='Year started' id='jobYearStarted' value={props.jobYearStarted}></input>
                <input type="tel" placeholder='Year finished' id='jobYearFinished' value={props.jobYearFinished}></input>
                <button type="button">Delete</button>
                <button type="button">Add</button>
            </form>
            <h2>Education</h2>
            <form onChange={props.handleChange}>
                <input type="text" placeholder='University name' id='universityName' value={props.universityName}></input>
                <input type="text" placeholder='City' id='universityCity' value={props.universityCity}></input>
                <input type="text" placeholder='Degree' id='universityDegree' value={props.universityDegree}></input>
                <input type="text" placeholder='Subject' id='universitySubject' value={props.universitySubject}></input>
                <input type="text" placeholder='Year started' id='universityYearStarted' value={props.universityYearStarted}></input>
                <input type="tel" placeholder='Year finished' id='universityYearFinished' value={props.universityYearFinished}></input>
                <button type="button">Delete</button>
                <button type="button">Add</button>
            </form>
            <div className='control-buttons'>
                <button type="button">Generate PDF</button>
                <button type="button">Load Example</button>
                <button type="button">Reset</button>
            </div>


        </div>
    
    
    </>)
}