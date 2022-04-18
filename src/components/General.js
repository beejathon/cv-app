import React from "react";
import { Component } from "react";
import '../styles/General.css'

class General extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      summary: '',
      photo: { },
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
    this.props.saveForm(e, this.state)
  }

  render() {
    return (
      <div className="General"> 
        <h2>General Info</h2>
        <label htmlFor="firstName">First Name: </label>
        <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} required />
        <label htmlFor="lastName">Last Name: </label>
        <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} required />
        <label htmlFor="email">Email: </label>
        <input type="email"name="email" value={this.state.email} onChange={this.handleChange} required />
        <label htmlFor="phone">Phone: </label>
        <input type="phone" name="phone" value={this.state.phone} onChange={this.handleChange} required />
        <label htmlFor="summary">Summary: </label>
        <textarea name="summary" value={this.state.summary} onChange={this.handleChange} required />
        <button id="general" type="submit" disabled={!this.state} onClick={this.handleSubmit}>Save</button>
      </div>
    );
  };
}

export default General;

