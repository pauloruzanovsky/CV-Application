import React from 'react';
import PersonalInputs from './PersonalInputs/PersonalInputs';
import CVOutput from './CVOutput/CVOutput'
import css from '../../styles/Main.css'

export default function Main() {
    let info = 
        { 
            firstName: "",
            lastName: "",
            title:"",
            jobCity:"",
            jobYearStarted:"",
            jobYearFinished:"",    
        }

    let experience = 
        { 
            jobPosition: "",
            jobCompany:"",
            jobCity:"",
            jobYearStarted:"",
            jobYearFinished:"",    
        }
    
    let education = 
        { 
            universityName: "",
            universityCity: "",
            universityDegree: "",
            universitySubject: "",
            universityYearStarted: "",
            universityYearFinished: ""     
        }
    

    let [personalInformation, setPersonalInformation] = React.useState(info)
    let [experienceCount, setExperienceCount] = React.useState(1)
    let [experiences, setExperiences] = React.useState([experience])
    let [educationCount, setEducationCount] = React.useState(1)
    let [educations, setEducations] = React.useState([education])

    function increaseExperienceCount() {
        setExperienceCount(prevState => prevState + 1)
        let newExperiences = [...experiences]
        newExperiences.push(experience)
        setExperiences(newExperiences)

    }

    function decreaseExperienceCount(event) {
        setExperienceCount(prevState => prevState - 1)
        let newExperiences = [...experiences]
        newExperiences.splice(Number(event.target.parentNode.id),1)
        setExperiences(newExperiences)
    }

    function increaseEducationCount() {
        setEducationCount(prevState => prevState + 1)
        let newEducations = [...educations]
        newEducations.push(education)
        setEducations(newEducations)
        console.log(educationCount)
    }

    function decreaseEducationCount(event) {
        setEducationCount(prevState => prevState - 1)
        let newEducations = [...educations]
        newEducations.splice(Number(event.target.parentNode.id),1)
        setEducations(newEducations)
        console.log(educationCount)
    }
    
    function updatePersonalInformation(event) {
        setPersonalInformation(prevState => ({
            ...personalInformation,
            [event.target.id]:event.target.value
        })
        )
        console.log(personalInformation)
    }

    function updateExperience(event) {
        let updatedExperiences = experiences.map((experience, index) => {
            return index === Number(event.target.parentNode.id) ?
                     {...experience,
                    [event.target.id]:event.target.value}
                      :
                     {...experience}
                }
                    
        )
        setExperiences(updatedExperiences)
        console.log('updated: ', updatedExperiences)

    }

    function updateEducation(event) {
        let updatedEducations = educations.map((education, index) => {
            return index === Number(event.target.parentNode.id) ?
                     {...education,
                    [event.target.id]:event.target.value}
                      :
                     {...education}
                }
                    
        )
        setEducations(updatedEducations)
        console.log('updated: ', updatedEducations)

    }

    function loadExample() {
        let info = {
            firstName: 'Paulo',
            lastName: 'Ruzanovsky',
            title: 'Bodybuilder',
            address: 'Orestes Guimarães 1144',
            phone: '47999487723',
            email: 'pauloruzanovsky@gmail.com',
            description: `Bodybuilder, engineer and soon to be developer`
        }
            setPersonalInformation(info)

        let exp = [
            {
                jobPosition: 'S&OE Analyst',
                jobCompany: 'Nidec',
                jobCity: 'Joinville',
                jobYearStarted: '2021',
                jobYearFinished: 'Present',
            },
            {
                jobPosition: 'S&OE Intern',
                jobCompany: 'Embraco',
                jobCity: 'Joinville',
                jobYearStarted: '2018',
                jobYearFinished: '2020',
            },
            {
                jobPosition: 'Sales backoffice apprentice',
                jobCompany: 'Whirlpool',
                jobCity: 'Joinville',
                jobYearStarted: '2014',
                jobYearFinished: '2015',
            }           
        ]
        setExperiences(exp)
        setExperienceCount(3)
        let edu = [
            {
                universityName: 'UDESC',
                universityCity: 'Joinville',
                universityDegree: 'Bachelor',
                universitySubject: 'Industrial Engineer',
                universityYearStarted: '2013',
                universityYearFinished: '2021'
            }
        ]
        setEducations(edu)
    }

    function reset() {
        let personal = {
            firstName: "",
            lastName: "",
            title: "",
            address: "",
            phone: "",
            email: "",
            description: ""
        }
        setPersonalInformation(personal)
        setExperiences([experience])
        setEducations([education])
        setExperienceCount(1)
        setEducationCount(1)
    }
    return(
        <main>
            <PersonalInputs     
            firstName={personalInformation.firstName}
            lastName={personalInformation.lastName}
            title={personalInformation.title}
            address={personalInformation.address}
            phone={personalInformation.phone}
            email={personalInformation.email}
            description={personalInformation.description}
            experiences={experiences}        
            increaseExperienceCount={increaseExperienceCount}
            decreaseExperienceCount={decreaseExperienceCount}
            experienceCount={experienceCount}
            updateExperience={updateExperience}
            educations={educations}        
            increaseEducationCount={increaseEducationCount}
            decreaseEducationCount={decreaseEducationCount}
            educationCount={educationCount}
            updateEducation={updateEducation}
            handlePersonalInfoChange={updatePersonalInformation}
            loadExample={loadExample}
            reset={reset}
            />
            

            <CVOutput 
                name={`${personalInformation.firstName} ${personalInformation.lastName}`}
                title={personalInformation.title}
                address={personalInformation.address}
                phone={personalInformation.phone}
                email={personalInformation.email}
                description={personalInformation.description}
                experiences={experiences}
                educations={educations}    
                />
        </main>
    )
}