import React from "react";
import GI_Display from "./GI_Display";
import Gi_Edit from "./GI_Edit";
import handleEditModeFunc from "../../helperFunctions/handleEditMode";

class GI_Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      GI_MetaInfo: {
        name: "N/A",
        email: "N/A",
        phone: "N/A",
      },
      EditMode: false,
    };
  }

  //TODO: create a function that sets the EditMode state true or false

  render() {
    console.log(this.state.EditMode);

    const { name, email, phone } = this.state.GI_MetaInfo;

    return (
      <GI_Display
        name={name}
        email={email}
        phone={phone}
        context={this}
        handleEditMode={handleEditModeFunc}
      />
    );
  }
}

export default GI_Main;
