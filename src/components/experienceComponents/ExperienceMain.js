import React from "react";
import ExperienceDisplay from "./ExperienceDisplay";
import handleEditModeFun from "../../helperFunctions/handleEditMode";
import "../styles/experience.css";

class ExperienceMain extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: false,
    };
  }

  render() {
    const editMode = this.state.editMode;

    return (
      <ExperienceDisplay
        contextMain={this}
        handleEditMode={handleEditModeFun}
        editMode={editMode}
      />
    );
  }
}

export default ExperienceMain;
