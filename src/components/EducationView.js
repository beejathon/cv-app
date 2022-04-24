import React from "react";
import { Component } from "react";
import EducationEditForm from "./EducationEditForm";

class EducationView extends Component {
  constructor(props) {
    super(props);

    this.updateEducation = this.updateEducation.bind(this);
  }

  updateEducation(data) {
    this.props.updateEducation(data);
  }

  render() {
    const { education, editEducation, delEducation } = this.props;
  
    return (
      <div className="Education">
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
            return <EducationEditForm key={entry.id} entry={entry} updateEducation={this.updateEducation} />
          }
        })}
      </div>
    );
  };
}

export default EducationView;