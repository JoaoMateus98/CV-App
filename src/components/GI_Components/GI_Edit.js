import React from "react";
import handleEditModeFun from "../../helperFunctions/handleEditMode";
import SubmitButton from "../HelperComponents/SubmitButton";
import updateGIState from "../../helperFunctions/updateGIState";

class GIEdit extends React.Component {
  render() {
    const context = this.props.context;
    const { name, email, phone } = this.props.GI_MetaInfo;

    return (
      <form onSubmit={() => handleEditModeFun(context, false)}>
        <label htmlFor="name-field">Name:</label>
        <input
          id="name-field"
          type={"text"}
          placeholder={"Enter Name Here"}
          value={name}
          onChange={(event) =>
            updateGIState(context, "name", event.target.value)
          }
        />
        <label htmlFor="email-field">Email:</label>
        <input
          id="email-field"
          type={"email"}
          placeholder={"Enter Email Here"}
          value={email}
          onChange={(event) =>
            updateGIState(context, "email", event.target.value)
          }
        />
        <label htmlFor="phone-field">Phone:</label>
        <input
          id="phone-field"
          type={"tel"}
          placeholder={"Enter Phone Here"}
          value={phone}
          onChange={(event) =>
            updateGIState(context, "phone", event.target.value)
          }
        />
        <SubmitButton />
      </form>
    );
  }
}

export default GIEdit;
