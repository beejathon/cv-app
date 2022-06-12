import React, { useState } from "react";
import '../styles/Experience.css';

const ExperienceEditForm = ({entry, updateExperience}) => {
  const [organization, setOrganization] = useState(entry.organization);
  const [title, setTitle] = useState(entry.title);
  const [summary, setSummary] = useState(entry.summary);
  const [dateStart, setDateStart] = useState(entry.dateStart);
  const [dateEnd, setDateEnd] = useState(entry.dateEnd);
  const [id] = useState(entry.id);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateExperience({organization, title, summary, dateStart, dateEnd, id});
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
        <button id="experience" type="submit">Save</button>
      </form>
    </div>
  )
}

export default ExperienceEditForm;