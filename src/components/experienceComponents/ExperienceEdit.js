import React from "react";
import SubmitButton from "../helperComponents/SubmitButton";
import InputItem from "../helperComponents/InputItem";
import TextAreaItem from "../helperComponents/TextAreaItem";
import PeriodItem from "../helperComponents/PeriodItem";
import handleEditModeFun from "../../helperFunctions/handleEditMode";

class ExperienceEdit extends React.Component {
  handleSubmit = (context, createNewExperienceItem) => {
    handleEditModeFun(context, false);
    createNewExperienceItem();
  };

  render() {
    const { context, createNewExperienceItem } = this.props;

    return (
      <form
        className="experience-main-container"
        onSubmit={() => this.handleSubmit(context, createNewExperienceItem)}
      >
        <InputItem inputType="company" type="text" context={context} />
        <InputItem inputType="position" type="text" context={context} />
        <TextAreaItem
          inputType="description"
          rows="3"
          cols="20"
          context={context}
        />
        <PeriodItem inputType="period" context={context} />
        <SubmitButton />
      </form>
    );
  }
}

export default ExperienceEdit;
