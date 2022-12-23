import React from "react";
import GIDisplay from "./GI_Display";
import GIEdit from "./GI_Edit";
import handleEditModeFun from "../../helperFunctions/handleEditMode";
import "../styles/GI_Main.css";

class GIMain extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "N/A",
      email: "N/A",
      phone: "N/A",
      editMode: false,
    };
  }

  render() {
    const name = this.state.name;
    const email = this.state.email;
    const phone = this.state.phone;
    const editMode = this.state.editMode;

    if (editMode) {
      return <GIEdit context={this} name={name} email={email} phone={phone} />;
    } else {
      return (
        <GIDisplay
          context={this}
          name={name}
          email={email}
          phone={phone}
          handleEditMode={handleEditModeFun}
        />
      );
    }
  }
}

export default GIMain;
