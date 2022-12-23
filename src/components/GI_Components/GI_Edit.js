import React from "react";
import SubmitButton from "../HelperComponents/SubmitButton";
import GIInputItem from "./GI_HelperComponents/GI_InputItem";
import handleEditModeFun from "../../helperFunctions/handleEditMode";

class GIEdit extends React.Component {
  render() {
    const context = this.props.context;

    return (
      <form onSubmit={() => handleEditModeFun(context, false)}>
        <GIInputItem inputType="name" type="text" context={context} />
        <GIInputItem inputType="email" type="email" context={context} />
        <GIInputItem inputType="phone" type="tel" context={context} />
        <SubmitButton buttonID="GI-Edit-submit-button" />
      </form>
    );
  }
}

export default GIEdit;
