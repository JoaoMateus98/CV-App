import React from "react";
import GIMain from "./GI_Components/GI_Main";
import ExperienceMain from "./experienceComponents/ExperienceMain";
import EducationMain from "./educationComponents/EducationMain";
import "./styles/app.css";

class App extends React.Component {
  render() {
    return (
      <div id="main-app-container">
        <div id="left-app-container">
          <GIMain />
        </div>
        <div id="right-app-container">
          <ExperienceMain />
          <EducationMain />
        </div>
      </div>
    );
  }
}

export default App;
