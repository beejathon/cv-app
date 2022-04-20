import React from "react";
import { Component } from "react";
import uniqid from 'uniqid';
import '../styles/Experience.css';

class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      organization: '',
      title: '',
      summary: '',
      dateStart: '',
      dateEnd: '',
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
    this.props.addExperienceEntry(this.state);
    this.setState({
      organization: '',
      title: '',
      summary: '',
      dateStart: '',
      dateEnd: '',
      id: uniqid(),
    });
  };

  render() {
    return (
      <div className="Experience">
        <h2>Experience</h2>
          <form className="experienceForm" onSubmit={this.handleSubmit}>
          <label htmlFor="organization">Organization Name: </label>
          <input type="text" name="organization" value={this.state.organization} onChange={this.handleChange} required />
          <label htmlFor="title">Job title / Position: </label>
          <input type="text" name="title" value={this.state.title} onChange={this.handleChange} required />
          <label htmlFor="summary">Summary: </label>
          <input type="textarea" name="summary" value={this.state.summary} onChange={this.handleChange} required />
          <label htmlFor="dateStart">From: </label>
          <input type="date" name="dateStart" value={this.state.dateStart} onChange={this.handleChange} required />
          <label htmlFor="dateEnd">To: </label>
          <input type="date" name="dateEnd" value={this.state.dateEnd} onChange={this.handleChange} required />
          <button id="experience" type="submit">Add</button>
        </form>
      </div>
    );
  };
}

export default Experience;