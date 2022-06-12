import React from "react";
import ExperienceEditForm from "./ExperienceEditForm";
import '../styles/Experience.css';

const ExperienceView = props => {
  const {
    experience,
    editExperience,
    delExperience,
    updateExperience
  } = props;

  return (
    <div className="experience">
      <h3>Experience:</h3>
      {experience.map((entry) => {
        if (entry.edit === false) {
          return (
            <div key={entry.id} className="experience-row">
              <p>{entry.organization}</p>
              <p>{entry.dateStart} - {entry.dateEnd}</p>
              <p>Job title / position: {entry.title}</p>
              <p>Summary: {entry.summary}</p>
              <div className="button-row">
                <button onClick={() => editExperience(entry.id)}>Edit</button>
                <button onClick={() => delExperience(entry.id)}>Delete</button>
              </div>
            </div>
          );
        } else {
          return <ExperienceEditForm key={entry.id} entry={entry} updateExperience={updateExperience} />
        }
      })}
    </div>
  )
}

export default ExperienceView;