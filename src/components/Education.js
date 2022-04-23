import React from "react";
import { Component } from "react";
import uniqid from 'uniqid'
import '../styles/Education.css';

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      institution: '',
      qualification: '',
      date: '',
      id: uniqid(),
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
    this.props.addEducation(this.state);
    this.setState({
      institution: '',
      qualification: '',
      date: '',
      id: uniqid(),
    });
  };

  render() {
    return (
      <div className="Education">
        <h2>Education</h2>
        <form className="educationForm" onSubmit={this.handleSubmit}>
          <label htmlFor="institution">Institution Name: </label>
          <input type="text" name="institution" value={this.state.institution} onChange={this.handleChange} required />
          <label htmlFor="qualification">Qualification: </label>
          <input type="text" name="qualification" value={this.state.qualification} onChange={this.handleChange} required />
          <label htmlFor="date">Date of completion: </label>
          <input type="date" name="date" value={this.state.date} onChange={this.handleChange} required />
          <button id="education" type="submit">Add</button>          
        </form>
      </div>
    );
  };
}

export default Education;