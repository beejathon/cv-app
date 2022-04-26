import React from "react";
import { Component } from "react";
import '../styles/Experience.css';

class ExperienceEditForm extends Component {
  constructor(props) {
    super(props);

    const { 
      organization, 
      title, 
      summary, 
      dateStart, 
      dateEnd, 
      id 
    } = props.entry;

    this.state = {
      organization: organization,
      title: title,
      summary: summary,
      dateStart: dateStart,
      dateEnd: dateEnd,
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
    this.props.updateExperience(this.state);
  };
  
  render() {
    return (
      <div className="Experience">
        <form className="experienceForm" onSubmit={this.handleSubmit}>
          <label htmlFor="organization">Organization Name: </label>
          <input type="text" name="organization" value={this.state.organization} onChange={this.handleChange} required />
          <label htmlFor="title">Job title / Position: </label>
          <input type="text" name="title" value={this.state.title} onChange={this.handleChange} required />
          <label htmlFor="summary">Summary: </label>
          <textarea name="summary" value={this.state.summary} onChange={this.handleChange} required />
          <label htmlFor="dateStart">From: </label>
          <input type="date" name="dateStart" value={this.state.dateStart} onChange={this.handleChange} required />
          <label htmlFor="dateEnd">To: </label>
          <input type="date" name="dateEnd" value={this.state.dateEnd} onChange={this.handleChange} required />
          <button id="experience" type="submit">Save</button>
        </form>
      </div>
    )
  }
}

export default ExperienceEditForm;