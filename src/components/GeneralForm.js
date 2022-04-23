import React from "react";
import { Component } from "react";
import '../styles/General.css'

class GeneralForm extends Component {
  constructor(props) {
    super(props);

    const { general } = props;

    this.state = {
      firstName: general.firstName,
      lastName: general.lastName,
      email: general.email,
      phone: general.phone,
      summary: general.summary,
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
    this.props.saveForm(e, this.state);
  };

  render() {
    return (
      <div className="General"> 
        <form id="general" className="generalForm" onSubmit={this.handleSubmit}>
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
          <button type="submit">Save</button>
        </form>
      </div>
    );
  };
}

export default GeneralForm;

