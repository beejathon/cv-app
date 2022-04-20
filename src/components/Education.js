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
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addEducationEntry(this.state);
    this.setState({
      institution: '',
      qualification: '',
      date: '',
      id: uniqid(),
    })
  }

  render() {
    return (
      <div className="Education">
        <h2>Education</h2>
        <label htmlFor="institution">Institution Name: </label>
        <input type="text" name="institution" value={this.state.institution} onChange={this.handleChange} required />
        <label htmlFor="qualification">Qualification: </label>
        <input type="text" name="qualification" value={this.state.qualification} onChange={this.handleChange} required />
        <label htmlFor="date">Date of completion: </label>
        <input type="text" name="date" value={this.state.date} onChange={this.handleChange} required />
        <button id="education" type="submit" disabled={!this.state} onClick={this.handleSubmit}>Add</button>
      </div>
    );
  };
}

export default Education;