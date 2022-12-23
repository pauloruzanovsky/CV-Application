import React from 'react'
import css from '../../../styles/CV_Outputs.css'

export default function CVOutput(props) {
    return(
        <>
        <div className='cv-output'>
            <div className='cv-header'>
                <div className='cv-name'>{props.name}</div>
                <div className='cv-title'> {props.title}</div>
            </div>
            <div className='cv-main'>
                <h3>Description</h3>
                <div className='cv-description'>{props.description}</div>
                <h3>Experience</h3>
                <div>
                    <h4 className='experience-period'>{`${props.jobYearStarted} - ${props.jobYearFinished}`}</h4>
                    <div className='experience-details'>
                        <h4 className='experience-position'>{props.jobPosition}</h4>
                        <div className='experience-company'>{`${props.jobCompany}, ${props.jobCity}`}</div>
                    </div>
                </div>
                <h3>Education</h3>
                <div>
                    <h4 className='education-period'>{`${props.universityYearStarted} - ${props.universityYearFinished}`}</h4>
                    <div className='education-details'>
                        <h4 className='university'>{props.universityName}</h4>
                        <div className='degree'>{props.universityDegree}</div>
                        <div className='subject'>{props.universitySubject}</div>
                    </div>
                </div>
            </div>
            <div className='cv-sidebar'>
                <img src={require('./photo.png')} width='250px' alt=''/>
                <h3>Personal Details</h3>
                <h4>Address</h4>
                <div>{props.address}</div>
                <h4>Phone Number</h4>
                <div>{props.phone}</div>
                <h4>Email</h4>
                <div>{props.email}</div>
            </div>
        </div>
        </>
    )
}