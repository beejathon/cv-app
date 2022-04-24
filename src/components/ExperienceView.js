import React from "react";
import { Component } from "react";
import ExperienceEditForm from "./ExperienceEditForm";

class ExperienceView extends Component {
  constructor(props) {
    super(props);

    this.updateExperience = this.updateExperience.bind(this)
  }

  updateExperience(data) {
    this.props.updateExperience(data);
  }

  render() {
    const { experience, editExperience, delExperience } = this.props;

    return (
      <div className="Experience">
        {experience.map((entry) => {
          if (entry.edit === false) {
            return (
              <div key={entry.id} className="experienceRow">
                <p>{entry.organization}</p>
                <p>{entry.dateStart} - {entry.dateEnd}</p>
                <p>Job title / position: {entry.title}</p>
                <p>Summary: {entry.summary}</p>
                <button onClick={() => editExperience(entry.id)}>Edit</button>
                <button onClick={() => delExperience(entry.id)}>Delete</button>
              </div>
            );
          } else {
            return <ExperienceEditForm key={entry.id} entry={entry} updateExperience={this.updateExperience} />
          }
        })}
      </div>
    )
  }
}

export default ExperienceView;