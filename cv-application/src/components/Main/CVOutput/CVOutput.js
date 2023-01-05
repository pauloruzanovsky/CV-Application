import React from 'react'
import css from '../../../styles/CV_Outputs.css'

export default function CVOutput(props) {
    let experiencesOutput = props.experiences.map((experience,index) => 
        <div className="experience" id={index}>
            <h4 className='experience-period'>{`${experience.jobYearStarted} - ${experience.jobYearFinished}`}</h4>
            <div className='experience-details'>
                <h4 className='experience-position'>{experience.jobPosition}</h4>
                <div className='experience-company'>{`${experience.jobCompany}, ${experience.jobCity}`}</div>
            </div>
        </div>
    )
    
    let educationsOutput = props.educations.map((education,index) =>
    <div className="education" id={index}>
        <h4 className='education-period'>{`${education.universityYearStarted} - ${education.universityYearFinished}`}</h4>
        <div className='education-details'>
            <h4 className='university'>{education.universityName}</h4>
            <div className='degree'>{education.universityDegree}</div>
            <div className='subject'>{education.universitySubject}</div>
        </div>
    </div>)

    return(
        <>
        <div className='cv-output'>
            <div className='cv-header'>
                <div className='cv-name'>{props.name}</div>
                <div className='cv-title'> {props.title}</div>
                <div className='information'>
                    <div>
                        <h4>Address</h4>
                        <div>{props.address}</div>
                    </div>
                    <div>
                        <h4>Phone Number</h4>
                        <div>{props.phone}</div>
                    </div>
                    <div>
                        <h4>Email</h4>
                        <div>{props.email}</div>
                    </div>
                </div>
            </div>

            <div className='cv-main'>
                <h3>Description</h3>
                <div className='cv-description'>{props.description}</div>
                <h3>Experience</h3>
                {experiencesOutput}
                <h3>Education</h3>
                {educationsOutput}
            </div>
        </div>
        </>
    )
}