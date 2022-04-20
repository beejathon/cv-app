import React from "react";

const Overview = (props) => {
    const { general, education } = props;

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
          </div>
        ))}
        <h3>Work Experience</h3>
      </div>
    );
}

export default Overview;