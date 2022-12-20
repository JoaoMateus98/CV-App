import React from "react";
import "./styles/App.css";
import GeneralInfo from "./GeneralInfo";
import Education from "./Education";
import Professional from "./Professional";
import Profile from "./Profile";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      GeneralInfo: {
        name: "",
        email: "",
        phone: "",
      },
    };
  }

  handleGeneralInfoUpdate = (e, name) => {
    e.preventDefault();
    console.log("hello", name);
  };

  render() {
    return (
      <div className="main-container">
        <GeneralInfo handleGeneralInfoUpdate={this.handleGeneralInfoUpdate} />
        <Education />
        <Professional />
        <Profile />
      </div>
    );
  }
}

export default App;
