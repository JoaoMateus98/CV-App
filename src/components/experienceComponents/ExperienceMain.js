import React from "react";
import ExperienceDisplay from "./ExperienceDisplay";
import ExperienceEdit from "./ExperienceEdit";
import handleEditModeFun from "../../helperFunctions/handleEditMode";
import "../styles/experience.css";

class ExperienceMain extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      company: "N/A",
      position: "N/A",
      description: "N/A",
      period: {
        start: "N/A",
        end: "N/A",
      },
      editMode: false,
    };
  }

  render() {
    console.log(this.state.company);
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
