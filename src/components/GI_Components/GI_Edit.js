import React from "react";
import SubmitButton from "../helperComponents/SubmitButton";
import GIInputItem from "./GI_HelperComponents/GI_InputItem";
import handleEditModeFun from "../../helperFunctions/handleEditMode";

class GIEdit extends React.Component {
  render() {
    const context = this.props.context;

    return (
      <form
        className="GI_main-container"
        onSubmit={() => handleEditModeFun(context, false)}
      >
        <GIInputItem inputType="name" type="text" context={context} />
        <GIInputItem inputType="email" type="email" context={context} />
        <GIInputItem inputType="phone" type="tel" context={context} />
        <SubmitButton />
      </form>
    );
  }
}

export default GIEdit;
