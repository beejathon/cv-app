import React, { useState } from "react";
import Header from "./components/Header";
import GeneralView from "./components/GeneralView";
import GeneralForm from "./components/GeneralForm";
import EducationView from "./components/EducationView";
import EducationForm from "./components/EducationForm";
import ExperienceView from "./components/ExperienceView";
import ExperienceForm from "./components/ExperienceForm";
import Preview from "./components/Preview";
import './styles/App.css';


const App = () => {
  const [general, setGeneral] = useState([]);
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  const [editGeneralOn, setEditGeneralOn] = useState(false);
  const [addEducationOn, setAddEducationOn] = useState(false);
  const [addExperienceOn, setAddExperienceOn] = useState(false);

  const saveGeneral = (data) => {
    setGeneral(data);
    setEditGeneralOn(false);
  }

  const editGeneral = () => {
    setEditGeneralOn(true);
  }

  const activateAddEdu = () => {
    setAddEducationOn(true);
  }

  const addEducation = (data) => {
    setEducation([...education, data]);
    setAddEducationOn(false);
  }

  const delEducation = (id) => {
    setEducation((prevState) => {
      const newEducation = prevState.filter((entry) => id !== entry.id);
      return newEducation;
    })
  }

  const editEducation = (id) => {
    setEducation((prevState) => {
      const newEducation = prevState.map((entry) => {
        if (entry.id === id) entry.edit = true;
        return entry;
      })
      return newEducation;
    })
  }

  const updateEducation = (data) => {
    const { 
      institution, 
      qualification, 
      date, 
      id 
    } = data;
    
    setEducation((prevState) => {
      const newEducation = prevState.map((entry) => {
        if (entry.id === id) {
          entry.institution = institution;
          entry.qualification = qualification;
          entry.date = date;
          entry.id = id;
          entry.edit = false;
        };
        return entry;
      })
      return newEducation;
    })
  };

  const activateAddExp = () => {
    setAddExperienceOn(true);
  }

  const addExperience = (data) => {
    setExperience([...experience, data]);
    setAddExperienceOn(false);
  }

  const delExperience = (id) => {
    setExperience((prevState) => {
      const newExperience = prevState.filter((item) => id !== item.id);
      return newExperience;
    });
  }

  const editExperience = (id) => {
    setExperience((prevState) => {
      const newExperience = prevState.map((entry) => {
        if (entry.id === id) entry.edit = true;
        return entry;
      })
      return newExperience;
    });
  }

  const updateExperience = (data) => {
    const { 
      organization, 
      title, 
      summary, 
      dateStart,
      dateEnd,
      id, 
    } = data;

    setExperience((prevState) => {
      const newExperience = prevState.map((entry) => {
        if (entry.id === id) {
          entry.organization = organization;
          entry.title = title;
          entry.summary = summary;
          entry.dateStart = dateStart;
          entry.dateEnd = dateEnd;
          entry.edit = false;
        };
        return entry;
      })
      return newExperience;
    });
  };

  let generalSection;
  if (editGeneralOn) {
    generalSection = <GeneralForm 
      general={general} 
      saveGeneral={saveGeneral} 
    />
  } else {
    generalSection = <GeneralView 
      general={general} 
      editGeneral={editGeneral} 
    />
  }

  let addEducationSection;
  if (addEducationOn) {
    addEducationSection = <EducationForm addEducation={addEducation} />
  } else {
    addEducationSection = <button onClick={activateAddEdu}>+</button>
  }

  let addExperienceSection;
  if (addExperienceOn) {
    addExperienceSection = <ExperienceForm addExperience={addExperience} />
  } else {
    addExperienceSection = <button onClick={activateAddExp}>+</button>
  }

  let content = (
    <div className="App">
      <Header />
      <div className="main">
        {generalSection}
        <EducationView
          education={education}
          editEducation={editEducation} 
          delEducation={delEducation}
          updateEducation={updateEducation}
        />
        {addEducationSection}
        <ExperienceView 
          experience={experience}
          editExperience={editExperience}
          delExperience={delExperience}
          updateExperience={updateExperience}
        />
        {addExperienceSection}
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
  
  return content;
}

export default App;
