import React, { Component } from "react";
import General from "./components/General";
import Overview from "./components/Overview";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      general: [],
      education: [],
      work: [],
    };

    this.saveForm = this.saveForm.bind(this);
  };

  saveForm(e, data) {
    const values = Object.values(data)

    this.setState({
      [e.target.id]: values,
    })
  }

  render() {
    const { general, education, work } = this.state;

    return (
      <div className="App">
        <General saveForm={this.saveForm} />
        <Overview general={general} education={education} work={work} />
      </div>
    );
  };
}

export default App;
