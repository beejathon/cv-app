import React, { useState, useEffect } from "react";
import '../styles/General.css'

const GeneralForm = ({general, saveGeneral}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [summary, setSummary] = useState('');

  useEffect(() => {
    setFirstName(general.firstName);
    setLastname(general.lastName);
    setEmail(general.email);
    setPhone(general.phone);
    setSummary(general.summary);
  }, [general])

  const handleSubmit = (e) => {
    e.preventDefault();
    saveGeneral({firstName, lastName, email, phone, summary});
  };

  return (
    <div className="General">
      <h3>General Info:</h3>
      <form id="general" className="generalForm" onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name: </label>
        <input type="text" name="firstName" value={firstName} onChange={e => setFirstName(e.target.value)} required />
        <label htmlFor="lastName">Last Name: </label>
        <input type="text" name="lastName" value={lastName} onChange={e => setLastname(e.target.value)} required />
        <label htmlFor="email">Email: </label>
        <input type="email"name="email" value={email} onChange={e => setEmail(e.target.value)} required />
        <label htmlFor="phone">Phone: </label>
        <input type="phone" name="phone" value={phone} onChange={e => setPhone(e.target.value)} required />
        <label htmlFor="summary">Summary: </label>
        <textarea name="summary" value={summary} onChange={e => setSummary(e.target.value)} required />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default GeneralForm;

