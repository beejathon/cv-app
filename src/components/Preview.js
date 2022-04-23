import React from "react";

const Preview = (props) => {
    const { 
      general, 
      education, 
      experience,
      delEducation,
      delExperience
    } = props;

    return (
      <div>
        <h3>General Info</h3>
        <p>Name: {general.firstName} {general.lastName}</p>
        <p>Email: {general.email}</p>
        <p>Phone: {general.phone}</p>
        <p>Summary: {general.summary}</p>   
        <h3>Education</h3>
        {education.map((entry) => (
          <div key={entry.id} className="educationRow">
            <p>Institution name: {entry.institution}</p>
            <p>Qualification: {entry.qualification}</p>
            <p>Date: {entry.date}</p>
            <button onClick={() => delEducation(entry.id)}>Delete</button>
          </div>
        ))}
        <h3>Experience</h3>
        {experience.map((entry) => (
          <div key={entry.id} className="experienceRow">
            <p>{entry.organization}</p>
            <p>{entry.dateStart} - {entry.dateEnd}</p>
            <p>Job title / position: {entry.title}</p>
            <p>Summary: {entry.summary}</p>
            <button onClick={() => delExperience(entry.id)}>Delete</button>
          </div>
        ))}
      </div>
    );
}

export default Preview;