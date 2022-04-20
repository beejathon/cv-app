import React, { Component } from "react";
import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Overview from "./components/Overview";
import './styles/App.css'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      general: [],
      education: [],
      experience: [],
    };

    this.saveForm = this.saveForm.bind(this);
    this.addEducationEntry = this.addEducationEntry.bind(this);
    this.addExperienceEntry = this.addExperienceEntry.bind(this);
  };

  saveForm(e, data) {
    this.setState({
      [e.target.id]: data,
    })
  }

  addEducationEntry(data) {
    this.setState(state => {
      const education = [...state.education, data];

      return {
        education,
      };
    });
  };

  addExperienceEntry(data) {
    this.setState(state => {
      const experience = [...state.experience, data];

      return {
        experience,
      };
    });
  };

  render() {
    const { general, education, experience } = this.state;

    return (
      <div className="App">
        <div className="forms">
          <General saveForm={this.saveForm} />
          <Education addEducationEntry={this.addEducationEntry} />
          <Experience addExperienceEntry={this.addExperienceEntry} />
        </div>
        <div className="overview">
          <Overview general={general} education={education} experience={experience} />
        </div>
      </div>
    );
  };
}

export default App;
