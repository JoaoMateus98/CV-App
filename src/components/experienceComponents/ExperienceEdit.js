import React from "react";
import SubmitButton from "../helperComponents/SubmitButton";
import ExperienceInputItem from "./experienceHelperComponents/experienceInputItem";
import handleEditModeFun from "../../helperFunctions/handleEditMode";

class ExperienceEdit extends React.Component {
  render() {
    const context = this.props.context;

    return (
      <form
        className="experience-container"
        onSubmit={() => handleEditModeFun(context, false)}
      >
        <SubmitButton />
      </form>
    );
  }
}

export default ExperienceEdit;
