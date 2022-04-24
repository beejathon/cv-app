import React from "react";
import '../styles/General.css'

const GeneralView = (props) => {
  const { general, editGeneral } = props;

  return (
    <div className="General"> 
      <p>Name: {general.firstName} {general.lastName}</p>
      <p>Email: {general.email}</p>
      <p>Phone: {general.phone}</p>
      <p>Summary: {general.summary}</p>
      <button onClick={() => editGeneral()}>Edit</button>
    </div>
  )
}

export default GeneralView;