import React from "react";
import { Component } from "react";
import '../styles/Education.css';

class EducationEditForm extends Component {
  constructor(props) {
    super(props);

    const { 
      institution, 
      qualification, 
      date, 
      id 
    } = props.entry;

    this.state = {
      institution: institution,
      qualification: qualification,
      date: date,
      id: id,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateEducation(this.state);
  };

  render() {
    return (
      <div className="Education">
        <form className="educationForm" onSubmit={this.handleSubmit}>
          <label htmlFor="institution">Institution Name: </label>
          <input type="text" name="institution" value={this.state.institution} onChange={this.handleChange} required />
          <label htmlFor="qualification">Qualification: </label>
          <input type="text" name="qualification" value={this.state.qualification} onChange={this.handleChange} required />
          <label htmlFor="date">Date of completion: </label>
          <input type="date" name="date" value={this.state.date} onChange={this.handleChange} required />
          <button id="education" type="submit">Save</button>          
        </form>
      </div>
    );
  };
}

export default EducationEditForm;