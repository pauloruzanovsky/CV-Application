import React from 'react'
import css from '../../../styles/PersonalInputs.css'
import Experience from './Experiences'
import Education from './Education'

export default function PersonalInputs(props) {
    let experienceElements = props.experiences.map((experience, index) => <Experience
    id = {index}
    jobPosition = {experience.jobPosition}
    jobCompany = {experience.jobCompany}
    jobCity = {experience.jobCity}
    jobYearStarted = {experience.jobYearStarted}
    jobYearFinished = {experience.jobYearFinished}
    increaseExperienceCount={props.increaseExperienceCount}
    decreaseExperienceCount={props.experienceCount !== 1 ? props.decreaseExperienceCount : () => {alert(`Need at least ${props.experienceCount} experience`)}}
    handleChange={props.updateExperience}
/>   )

    let educationElements = props.educations.map((education, index) => <Education
    id = {index}
    universityName={education.universityName}
    universityCity={education.universityCity}
    universityDegree={education.universityDegree}
    universitySubject={education.universitySubject}
    universityYearStarted={education.universityYearStarted}
    universityYearFinished={education.universityYearFinished}
    increaseEducationCount={props.increaseEducationCount}
    decreaseEducationCount={props.educationCount !== 1 ? props.decreaseEducationCount : () => {alert(`Need at least ${props.educationCount} education`)}}
    handleChange={props.updateEducation}
    />   )

    return(
    <>
        <div className='personal-inputs'>
            <h2>Personal Information</h2>
            <form onChange={props.handlePersonalInfoChange}>
                <input type="text" placeholder='First Name' id='firstName' value={props.firstName}></input>
                <input type="text" placeholder='Last Name' id='lastName' value={props.lastName}></input>
                <input type="text" placeholder='Title' id ='title' value={props.title}></input>
                <input type="text" placeholder='Address' id='address' value={props.address}></input>
                <input type="tel" placeholder='Phone number' id='phone' value={props.phone}></input>
                <input type="email" placeholder='Email' id='email' value={props.email}></input>
                <textarea type="text" placeholder='Description' id='description' value={props.description}></textarea>
            </form>
            <h2>Experiences</h2>
            {experienceElements}     
            <button type="button" class="add-button" onClick={props.increaseExperienceCount}>Add new experience</button>
            <h2>Education</h2>
            {educationElements}
            <button type="button" class="add-button" onClick={props.increaseEducationCount}>Add new education</button>

            <div className='control-buttons'>
                <button type="button" onClick={props.loadExample}>Load Example</button>
                <button type="button" onClick={props.reset}>Reset</button>
            </div>


        </div>
    
    
    </>)
}