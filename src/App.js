import React, { Component } from "react";
import GeneralView from "./components/GeneralView";
import GeneralForm from "./components/GeneralForm";
import EducationForm from "./components/EducationForm";
import ExperienceForm from "./components/ExperienceForm";
import Preview from "./components/Preview";
import './styles/App.css'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      general: [{
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        summary: '',
      }],
      education: [],
      experience: [],
      editGeneral: false,
      editEducation: false,
      editExperience: false,
    };

    this.saveForm = this.saveForm.bind(this);
    this.editGeneral = this.editGeneral.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.addExperience = this.addExperience.bind(this);
    this.delEducation = this.delEducation.bind(this);
    this.delExperience = this.delExperience.bind(this);
  };

  saveForm(e, data) {
    this.setState({
      [e.target.id]: data,
      editGeneral: false,
    })
  }

  editGeneral() {
    this.setState({
      editGeneral: true,
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
      editGeneral
    } = this.state;

    let generalSection;
    if (editGeneral) {
      generalSection = <GeneralForm general={general} saveForm={this.saveForm} />
    } else {
      generalSection = <GeneralView general={general} editGeneral={this.editGeneral} />
    }

    return (
      <div className="App">
        <div className="main">
          <h3>General Info:</h3>
          {generalSection}
          <EducationForm 
            addEducation={this.addEducation} 
          />
          <ExperienceForm 
            addExperience={this.addExperience} 
          />
        </div>
        <div className="aside">
        <Preview 
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
