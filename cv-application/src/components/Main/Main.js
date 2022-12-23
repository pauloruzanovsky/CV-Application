import React from 'react';
import PersonalInputs from './PersonalInputs/PersonalInputs';
import CVOutput from './CVOutput/CVOutput'
import css from '../../styles/Main.css'

export default function Main(props) {
    let [personalInformation, setPersonalInformation] = React.useState({
        firstName: "",
        lastName: "",
        
    })

    function updatePersonalInformation(event) {
        setPersonalInformation(prevState => ({
            ...personalInformation,
            [event.target.id]:event.target.value
        })
        )
        console.log(personalInformation)
    }

    return(
        <main>
            <PersonalInputs handleChange={updatePersonalInformation}/>
            <CVOutput 
                name={`${personalInformation.firstName} ${personalInformation.lastName}`}
                title={personalInformation.title}
                address={personalInformation.address}
                phone={personalInformation.phone}
                email={personalInformation.email}
                description={personalInformation.description}
                jobPosition={personalInformation.jobPosition}
                jobCompany={personalInformation.jobCompany}
                jobCity={personalInformation.jobCity}
                jobYearStarted={personalInformation.jobYearStarted}
                jobYearFinished={personalInformation.jobYearFinished}
                universityName={personalInformation.universityName}
                universityCity={personalInformation.universityCity}
                universityDegree={personalInformation.universityDegree}
                universitySubject={personalInformation.universitySubject}
                universityYearStarted={personalInformation.universityYearStarted}
                universityYearFinished={personalInformation.universityYearFinished}
                
                />
        </main>
    )
}