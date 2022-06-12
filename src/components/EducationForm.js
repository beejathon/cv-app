import React, { useState } from "react";
import uniqid from 'uniqid';
import '../styles/Education.css';

const EducationForm = ({addEducation}) => {
  const [institution, setInstitution] = useState('');
  const [qualification, setQualification] = useState('');
  const [date, setDate] = useState('');
  const [id] = useState(uniqid());
  const [edit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    addEducation({institution, qualification, date, id, edit});
  };

  return (
    <form className="education-form" onSubmit={handleSubmit}>
      <label htmlFor="institution">Institution Name: </label>
      <input type="text" name="institution" value={institution} onChange={e => setInstitution(e.target.value)} required />
      <label htmlFor="qualification">Qualification: </label>
      <input type="text" name="qualification" value={qualification} onChange={e => setQualification(e.target.value)} required />
      <label htmlFor="date">Date of completion: </label>
      <input type="date" name="date" value={date} onChange={e => setDate(e.target.value)} required />
      <button id="education" type="submit">Add</button>          
    </form>
  );
}

export default EducationForm;