import React, { useState } from "react";
import uniqid from 'uniqid';
import '../styles/Experience.css';

const ExperienceForm = ({addExperience}) => {
  const [organization, setOrganization] = useState('');
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [dateStart, setDateStart] = useState('');
  const [dateEnd, setDateEnd] = useState('');
  const [id] = useState(uniqid());
  const [edit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    addExperience({organization, title, summary, dateStart, dateEnd, id, edit})
  };

  return (
    <div className="experience">
      <form className="experience-form" onSubmit={handleSubmit}>
        <label htmlFor="organization">Organization Name: </label>
        <input type="text" name="organization" value={organization} onChange={e => setOrganization(e.target.value)} required />
        <label htmlFor="title">Job title / Position: </label>
        <input type="text" name="title" value={title} onChange={e => setTitle(e.target.value)} required />
        <label htmlFor="summary">Summary: </label>
        <textarea name="summary" value={summary} onChange={e => setSummary(e.target.value)} required />
        <label htmlFor="dateStart">From: </label>
        <input type="date" name="dateStart" value={dateStart} onChange={e => setDateStart(e.target.value)} required />
        <label htmlFor="dateEnd">To: </label>
        <input type="date" name="dateEnd" value={dateEnd} onChange={e => setDateEnd(e.target.value)} required />
        <button id="experience" type="submit">Add</button>
      </form>
    </div>
  );
}

export default ExperienceForm;