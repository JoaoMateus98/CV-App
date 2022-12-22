import React from "react";
import handleSubmitFunc from "../../helperFunctions/handleSubmit";
import SubmitButton from "../HelperComponents/SubmitButton";

class GIEdit extends React.Component {
  render() {
    const context = this.props.context;
    const { name, email, phone } = this.props.GI_MetaInfo;

    return (
      <form onSubmit={() => handleSubmitFunc(context)}>
        <label htmlFor="name-field">Name:</label>
        <input
          id="name-field"
          type={"text"}
          placeholder={"Enter Name Here"}
          value={name}
          onChange={(event) =>
            context.setState({ GI_MetaInfo: { name: event.target.value } })
          }
        />
        <label htmlFor="email-field">Email:</label>
        <input
          id="email-field"
          type={"email"}
          placeholder={"Enter Email Here"}
          value={email}
        />
        <label htmlFor="phone-field">Phone:</label>
        <input
          id="phone-field"
          type={"tel"}
          placeholder={"Enter Phone Here"}
          value={phone}
        />
        <SubmitButton />
      </form>
    );
  }
}

export default GIEdit;
