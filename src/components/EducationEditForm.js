import React, { useState } from "react";
import '../styles/Education.css';

const EducationEditForm = ({entry, updateEducation}) => {
  const [institution, setInstitution] = useState(entry.institution);
  const [qualification, setQualification] = useState(entry.qualification);
  const [date, setDate] = useState(entry.date);
  const [id] = useState(entry.id);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateEducation({institution, qualification, date, id});
  };

  return (
    <form className="education-form" onSubmit={handleSubmit}>
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