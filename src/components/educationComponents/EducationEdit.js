import React from "react";
import handleEditModeFun from "../../helperFunctions/handleEditMode";
import InputItem from "../helperComponents/InputItem";
import PeriodItem from "../helperComponents/PeriodItem";
import SubmitButton from "../helperComponents/SubmitButton";
import CancelEditButton from "../helperComponents/CancelEditButton";

class EducationEdit extends React.Component {
  handleSubmit = (event, context, createNewEducationItem, mode, editSchool) => {
    event.preventDefault();

    if (mode === "add") {
      createNewEducationItem();
    } else {
      editSchool();
    }

    handleEditModeFun(context, false);
  };

  render() {
    const { context, createNewEducationItem, mode, editSchool } = this.props;

    return (
      <form
        className="education-main-container"
        onSubmit={(event) =>
          this.handleSubmit(
            event,
            context,
            createNewEducationItem,
            mode,
            editSchool
          )
        }
      >
        <p id="education-title">EDUCATION</p>
        <InputItem inputType="school" type="text" context={context} />
        <InputItem inputType="major" type="text" context={context} />
        <PeriodItem inputType="period" context={context} />
        <div className="form-buttons">
          <SubmitButton />
          <CancelEditButton context={context} />
        </div>
      </form>
    );
  }
}

export default EducationEdit;
