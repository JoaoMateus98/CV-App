import React from "react";
import SubmitButton from "../HelperComponents/SubmitButton";
import InputItem from "../HelperComponents/InputItem";
import handleEditModeFun from "../../helperFunctions/handleEditMode";

class GIEdit extends React.Component {
  render() {
    const context = this.props.context;

    return (
      <form onSubmit={() => handleEditModeFun(context, false)}>
        <InputItem inputType="name" context={context} />
        <InputItem inputType="email" context={context} />
        <InputItem inputType="phone" context={context} />
        <SubmitButton buttonID="GI-Edit-submit-button" />
      </form>
    );
  }
}

export default GIEdit;
