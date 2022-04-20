import React, { Component } from "react";
import General from "./components/General";
import Education from "./components/Education";
import Overview from "./components/Overview";
import './styles/App.css'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      general: [],
      education: [],
      work: [],
    };

    this.saveForm = this.saveForm.bind(this);
    this.addEducationEntry = this.addEducationEntry.bind(this);
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

  render() {
    const { general, education, work } = this.state;

    return (
      <div className="App">
        <div className="forms">
          <General saveForm={this.saveForm} />
          <Education addEducationEntry={this.addEducationEntry} />
        </div>
        <div className="overview">
          <Overview general={general} education={education} work={work} />
        </div>
      </div>
    );
  };
}

export default App;
