import React from "react";
import "../styles/experience.css";
import ExperienceDisplay from "./ExperienceDisplay";
import ExperienceEdit from "./ExperienceEdit";

class ExperienceMain extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: true, // TODO: change to default false
    };
  }

  render() {
    const editMode = this.state.editMode;

    if (editMode) {
      return <ExperienceEdit context={this} />;
    } else {
      return <ExperienceDisplay />;
    }
  }
}

export default ExperienceMain;
