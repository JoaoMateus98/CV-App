import React from "react";
import SubmitButton from "../helperComponents/SubmitButton";
import InputItem from "../helperComponents/InputItem";
import handleEditModeFun from "../../helperFunctions/handleEditMode";

class ExperienceEdit extends React.Component {
  handleSubmit = (contextMain, createNewExperienceItem) => {
    handleEditModeFun(contextMain, false);
    createNewExperienceItem();
  };

  render() {
    const { contextMain, contextDisplay, createNewExperienceItem } = this.props;

    return (
      <form
        className="experience-main-container"
        onSubmit={() => this.handleSubmit(contextMain, createNewExperienceItem)}
      >
        <InputItem inputType="company" type="text" context={contextDisplay} />
        <InputItem inputType="position" type="text" context={contextDisplay} />
        <SubmitButton />
      </form>
    );
  }
}

export default ExperienceEdit;
