import React from "react";
import SubmitButton from "../HelperComponents/SubmitButton";
import InputItem from "../HelperComponents/InputItem";
import handleEditModeFun from "../../helperFunctions/handleEditMode";

class GIEdit extends React.Component {
  render() {
    const name = this.props.name;
    const email = this.props.email;
    const phone = this.props.phone;
    const context = this.props.context;

    return (
      <form onSubmit={() => handleEditModeFun(context, false)}>
        <InputItem
          containerID="GI-Edit-container-name"
          inputType="name"
          context={context}
          savedValueState={name}
        />
        <InputItem
          containerID="GI-Edit-container-email"
          inputType="email"
          context={context}
          savedValueState={email}
        />
        <InputItem
          containerID="GI-Edit-container-phone"
          inputType="phone"
          context={context}
          savedValueState={phone}
        />
        <SubmitButton buttonID="GI-Edit-submit-button" />
      </form>
    );
  }
}

export default GIEdit;
