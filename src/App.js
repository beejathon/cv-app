import React, { Component } from "react";
import Header from "./components/Header";
import GeneralView from "./components/GeneralView";
import GeneralForm from "./components/GeneralForm";
import EducationView from "./components/EducationView";
import EducationForm from "./components/EducationForm";
import ExperienceView from "./components/ExperienceView";
import ExperienceForm from "./components/ExperienceForm";
import Preview from "./components/Preview";
import './styles/App.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      general: [],
      education: [],
      experience: [],
      editGeneralOn: false,
      addEducationOn: false,
      addExperienceOn: false,
    };

    this.saveGeneral = this.saveGeneral.bind(this);
    this.editGeneral = this.editGeneral.bind(this);
    this.activateAddEdu = this.activateAddEdu.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.delEducation = this.delEducation.bind(this);
    this.editEducation = this.editEducation.bind(this);
    this.updateEducation = this.updateEducation.bind(this);
    this.activateAddExp = this.activateAddExp.bind(this);
    this.addExperience = this.addExperience.bind(this);
    this.delExperience = this.delExperience.bind(this);
    this.editExperience = this.editExperience.bind(this);
    this.updateExperience = this.updateExperience.bind(this);
  };

  saveGeneral(data) {
    this.setState({
      general: data,
      editGeneralOn: false,
    })
  }

  editGeneral() {
    this.setState({
      editGeneralOn: true,
    })
  }

  activateAddEdu() {
    this.setState({ addEducationOn: true })
  }

  addEducation(data) {
    this.setState(state => {
      const education = [...state.education, data];

      return {
        education,
        addEducationOn: false,
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

  activateAddExp() {
    this.setState({ addExperienceOn: true })
  }

  addExperience(data) {
    this.setState(state => {
      const experience = [...state.experience, data];

      return {
        experience,
        addExperienceOn: false,
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
      addEducationOn,
      addExperienceOn,
    } = this.state;

    let generalSection;
    if (editGeneralOn) {
      generalSection = <GeneralForm
        general={general} 
        saveGeneral={this.saveGeneral} 
      />
    } else {
      generalSection = <GeneralView general={general} editGeneral={this.editGeneral} />
    }

    let addEducation;
    if (addEducationOn) {
      addEducation = <EducationForm addEducation={this.addEducation} />
    } else {
      addEducation = <button onClick={this.activateAddEdu}>+</button>
    }

    let addExperience;
    if (addExperienceOn) {
      addExperience = <ExperienceForm addExperience={this.addExperience} />
    } else {
      addExperience = <button onClick={this.activateAddExp}>+</button>
    }

    return (
      <div className="App">
        <Header />
        <div className="main">
          {generalSection}
          <EducationView
            education={education}
            delEducation={this.delEducation}
            editEducation={this.editEducation} 
            updateEducation={this.updateEducation}
          />
          {addEducation}
          <ExperienceView 
            experience={experience}
            delExperience={this.delExperience}
            editExperience={this.editExperience}
            updateExperience={this.updateExperience}
          />
          {addExperience}
          <Preview 
            general={general} 
            education={education} 
            experience={experience} 
          />
        </div>
        <div className="aside">
        </div>
      </div>
    );
  };
}

export default App;
