import React, { Component } from "react";
import GeneralView from "./components/GeneralView";
import GeneralForm from "./components/GeneralForm";
import EducationView from "./components/EducationView";
import EducationForm from "./components/EducationForm";
import ExperienceView from "./components/ExperienceView";
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
      editGeneralOn: false,
    };

    this.saveForm = this.saveForm.bind(this);
    this.editGeneral = this.editGeneral.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.delEducation = this.delEducation.bind(this);
    this.editEducation = this.editEducation.bind(this);
    this.updateEducation = this.updateEducation.bind(this);
    this.addExperience = this.addExperience.bind(this);
    this.delExperience = this.delExperience.bind(this);
    this.editExperience = this.editExperience.bind(this);
    this.updateExperience = this.updateExperience.bind(this);
  };

  saveForm(e, data) {
    this.setState({
      [e.target.id]: data,
      editGeneralOn: false,
    })
  }

  editGeneral() {
    this.setState({
      editGeneralOn: true,
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
      const education = state.education.filter((entry) => id !== entry.id);

      return {
        education,
      };
    });
  };

  editEducation(id) {
    this.setState(state => {
      const education = state.education
      .map((entry) => {
        if (entry.id === id) {
          entry.edit = true;
        }
        return entry;
      })

      return {
        education,
      };
    });
  };

  updateEducation(data) {
    const { 
      institution, 
      qualification, 
      date, 
      id 
    } = data;

    this.setState(state => {
      const education = state.education.map((entry) => {
        if (entry.id === id) {
          entry.institution = institution;
          entry.qualification = qualification;
          entry.date = date;
          entry.edit = false;
        };

        return entry;
      });

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

  editExperience(id) {
    this.setState(state => {
      const experience = state.experience
      .map((entry) => {
        if (entry.id === id) {
          entry.edit = true;
        }
        return entry;
      })

      return {
        experience,
      };
    });
  };

  updateExperience(data) {
    const { 
      organization, 
      title, 
      summary, 
      dateStart,
      dateEnd,
      id, 
    } = data;

    this.setState(state => {
      const experience = state.experience.map((entry) => {
        if (entry.id === id) {
          entry.organization = organization;
          entry.title = title;
          entry.summary = summary;
          entry.dateStart = dateStart;
          entry.dateEnd = dateEnd;
          entry.edit = false;
        };

        return entry;
      });

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
      editGeneralOn,
    } = this.state;

    let generalSection;
    if (editGeneralOn) {
      generalSection = <GeneralForm general={general} saveForm={this.saveForm} />
    } else {
      generalSection = <GeneralView general={general} editGeneral={this.editGeneral} />
    }

    return (
      <div className="App">
        <div className="main">
          <h3>General Info:</h3>
          {generalSection}
          <h3>Education:</h3>
          <EducationView
            education={education}
            delEducation={this.delEducation}
            editEducation={this.editEducation} 
            updateEducation={this.updateEducation}
          />
          <EducationForm 
            addEducation={this.addEducation} 
          />
          <h3>Experience:</h3>
          <ExperienceView 
            experience={experience}
            delExperience={this.delExperience}
            editExperience={this.editExperience}
            updateExperience={this.updateExperience}
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
          />
        </div>
      </div>
    );
  };
}

export default App;
