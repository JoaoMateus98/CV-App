import React from "react";
import handleEditModeFun from "../../helperFunctions/handleEditMode";
import SubmitButton from "../HelperComponents/SubmitButton";

class GIEdit extends React.Component {
  render() {
    const name = this.props.name;
    const email = this.props.email;
    const phone = this.props.phone;
    const context = this.props.context;

    return (
      <form onSubmit={() => handleEditModeFun(context, false)}>
        <label htmlFor="name-field">Name:</label>
        <input
          id="name-field"
          type={"text"}
          placeholder={"Enter Name Here"}
          value={name}
          onChange={(event) => context.setState({ name: event.target.value })}
        />
        <label htmlFor="email-field">Email:</label>
        <input
          id="email-field"
          type={"email"}
          placeholder={"Enter Email Here"}
          value={email}
          onChange={(event) => context.setState({ email: event.target.value })}
        />
        <label htmlFor="phone-field">Phone:</label>
        <input
          id="phone-field"
          type={"tel"}
          placeholder={"Enter Phone Here"}
          value={phone}
          onChange={(event) => context.setState({ phone: event.target.value })}
        />
        <SubmitButton />
      </form>
    );
  }
}

export default GIEdit;
