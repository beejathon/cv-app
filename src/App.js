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
    this.addEducation = this.addEducation.bind(this);
    this.addExperience = this.addExperience.bind(this);
    this.delEducation = this.delEducation.bind(this);
    this.delExperience = this.delExperience.bind(this);
  };

  saveForm(e, data) {
    this.setState({
      [e.target.id]: data,
    })
  }

  addEducation(data) {
    this.setState(state => {
      const education = [...state.education, data];

      return {
        education,
      };
    });
  };

  delEducation(id) {
    this.setState(state => {
      const education = state.education.filter((item) => id !== item.id);

      return {
        education,
      };
    });
  };

  addExperience(data) {
    this.setState(state => {
      const experience = [...state.experience, data];

      return {
        experience,
      };
    });
  };

  delExperience(id) {
    this.setState(state => {
      const experience = state.experience.filter((item) => id !== item.id);

      return {
        experience,
      };
    });
  };

  render() {
    const { 
      general, 
      education, 
      experience,
    } = this.state;

    return (
      <div className="App">
        <div className="forms">
          <General 
            editGeneral={this.editGeneral}
            saveForm={this.saveForm} 
          />
          <Education 
            addEducation={this.addEducation} 
          />
          <Experience 
            addExperience={this.addExperience} 
          />
        </div>
        <div className="overview">
          <Overview 
            general={general} 
            education={education} 
            experience={experience} 
            delEducation={this.delEducation}
            delExperience={this.delExperience}
          />
        </div>
      </div>
    );
  };
}

export default App;
