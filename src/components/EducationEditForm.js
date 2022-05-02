import React, { useState } from "react";
import '../styles/Education.css';

const EducationEditForm = props => {
  const [institution, setInstitution] = useState(props.entry.institution);
  const [qualification, setQualification] = useState(props.entry.qualification);
  const [date, setDate] = useState(props.entry.date);
  const { id, edit } = props.entry;

  const handleSubmit = (e) => {
    e.preventDefault();
    props.updateEducation({institution, qualification, date, id, edit});
  };

  return (
    <form className="educationForm" onSubmit={handleSubmit}>
      <label htmlFor="institution">Institution Name: </label>
      <input type="text" name="institution" value={institution} onChange={e => setInstitution(e.target.value)} required />
      <label htmlFor="qualification">Qualification: </label>
      <input type="text" name="qualification" value={qualification} onChange={e => setQualification(e.target.value)} required />
      <label htmlFor="date">Date of completion: </label>
      <input type="date" name="date" value={date} onChange={e => setDate(e.target.value)} required />
      <button id="education" type="submit">Save</button>          
    </form>
  );
}

export default EducationEditForm;