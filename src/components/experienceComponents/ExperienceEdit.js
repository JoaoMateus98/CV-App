import React from "react";
import SubmitButton from "../helperComponents/SubmitButton";
import InputItem from "../helperComponents/InputItem";
import handleEditModeFun from "../../helperFunctions/handleEditMode";

class ExperienceEdit extends React.Component {
  handleSubmit = (context) => {
    handleEditModeFun(context, false);
  };

  render() {
    const context = this.props.context;

    return (
      <form
        className="experience-main-container"
        onSubmit={() => this.handleSubmit(context)}
      >
        <InputItem inputType="company" type="text" context={context} />
        <InputItem inputType="position" type="text" context={context} />
        <SubmitButton />
      </form>
    );
  }
}

export default ExperienceEdit;
