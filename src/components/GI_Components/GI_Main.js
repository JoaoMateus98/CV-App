import React from "react";
import GIDisplay from "./GI_Display";
import GIEdit from "./GI_Edit";
import handleEditModeFun from "../../helperFunctions/handleEditMode";
import "../styles/generalInformation.css";

class GIMain extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      editMode: false,
    };
  }

  render() {
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    const email = this.state.email;
    const phone = this.state.phone;
    const editMode = this.state.editMode;

    if (editMode) {
      return (
        <GIEdit
          context={this}
          firstName={firstName}
          lastName={lastName}
          email={email}
          phone={phone}
        />
      );
    } else {
      return (
        <GIDisplay
          context={this}
          firstName={firstName}
          lastName={lastName}
          email={email}
          phone={phone}
          handleEditMode={handleEditModeFun}
        />
      );
    }
  }
}

export default GIMain;
