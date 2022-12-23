import React from "react";
import GIMain from "./GI_Components/GI_Main";
import ExperienceMain from "./experienceComponents/ExperienceMain";
import EducationMain from "./educationComponents/EducationMain";

class App extends React.Component {
  render() {
    return (
      <div className="main-app-container">
        <GIMain />
        <ExperienceMain />
        <EducationMain />
      </div>
    );
  }
}

export default App;
