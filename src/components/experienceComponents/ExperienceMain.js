import React from "react";
import ExperienceDisplay from "./ExperienceDisplay";
import ExperienceEdit from "./ExperienceEdit";
import handleEditModeFun from "../../helperFunctions/handleEditMode";
import "../styles/experience.css";

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
      return (
        <ExperienceDisplay context={this} handleEditMode={handleEditModeFun} />
      );
    }
  }
}

export default ExperienceMain;
