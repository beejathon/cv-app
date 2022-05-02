import React from "react";
import EducationEditForm from "./EducationEditForm";

const EducationView = props => {
  const { 
    education, 
    editEducation, 
    delEducation, 
    updateEducation 
  } = props;

  return (
    <div className="Education">
      <h3>Education:</h3>
      {education.map((entry) => {
        if (entry.edit === false) {
          return (
            <div key={entry.id} className="educationRow">
              <p>Institution name: {entry.institution}</p>
              <p>Qualification: {entry.qualification}</p>
              <p>Date: {entry.date}</p>
              <button onClick={() => editEducation(entry.id)}>Edit</button>
              <button onClick={() => delEducation(entry.id)}>Delete</button>
            </div>
          );
        } else {
          return <EducationEditForm key={entry.id} entry={entry} updateEducation={updateEducation} />
        }
      })}
    </div>
  );
}

export default EducationView;