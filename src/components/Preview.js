import React from "react";
import '../styles/Preview.css';

const Preview = (props) => {
  const { 
    general, 
    education, 
    experience,
  } = props;

  return (
    <div className="preview">
      <h3>General Info</h3>
      <p>Name: {general.firstName} {general.lastName}</p>
      <p>Email: {general.email}</p>
      <p>Phone: {general.phone}</p>
      <p>Summary: {general.summary}</p>   
      <h3>Education</h3>
      {education.map((entry) => (
        <div key={entry.id} className="education-row">
          <p>Institution name: {entry.institution}</p>
          <p>Qualification: {entry.qualification}</p>
          <p>Date: {entry.date}</p>
        </div>
      ))}
      <h3>Experience</h3>
      {experience.map((entry) => (
        <div key={entry.id} className="experience-row">
          <p>{entry.organization}</p>
          <p>{entry.dateStart} - {entry.dateEnd}</p>
          <p>Job title / position: {entry.title}</p>
          <p>Summary: {entry.summary}</p>
        </div>
      ))}
    </div>
  );
}

export default Preview;