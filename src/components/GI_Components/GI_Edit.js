import React from "react";
import SubmitButton from "../helperComponents/SubmitButton";
import InputItem from "../helperComponents/InputItem";
import handleEditModeFun from "../../helperFunctions/handleEditMode";
import CancelEditButton from "../helperComponents/CancelEditButton";

class GIEdit extends React.Component {
  render() {
    const context = this.props.context;

    return (
      <form
        className="GI_main-container"
        onSubmit={() => handleEditModeFun(context, false)}
      >
        <InputItem inputType="firstName" type="text" context={context} />
        <InputItem inputType="lastName" type="text" context={context} />
        <InputItem inputType="email" type="email" context={context} />
        <InputItem inputType="phone" type="tel" context={context} />
        <div className="form-buttons">
          <SubmitButton />
          <CancelEditButton context={context} />
        </div>
      </form>
    );
  }
}

export default GIEdit;
