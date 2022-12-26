import React from "react";
import SubmitButton from "../helperComponents/SubmitButton";
import InputItem from "../helperComponents/InputItem";
import TextAreaItem from "../helperComponents/TextAreaItem";
import PeriodItem from "../helperComponents/PeriodItem";
import handleEditModeFun from "../../helperFunctions/handleEditMode";

class ExperienceEdit extends React.Component {
  handleSubmit = (context, createNewExperienceItem, mode, editJob) => {
    if (mode === "add") {
      createNewExperienceItem();
    } else {
      editJob();
    }

    console.log();
    handleEditModeFun(context, false);
  };

  render() {
    const { context, createNewExperienceItem, mode, editJob } = this.props;

    return (
      <form
        className="experience-main-container"
        onSubmit={() =>
          this.handleSubmit(context, createNewExperienceItem, mode, editJob)
        }
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
