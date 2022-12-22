import React from "react";
import GI_Display from "./GI_Display";
import Gi_Edit from "./GI_Edit";
import openEditModeFun from "../../helperFunctions/openEditMode";

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

  render() {
    const { name, email, phone } = this.state.GI_MetaInfo;
    const EditMode = this.state.EditMode;

    if (EditMode) {
      return <Gi_Edit />;
    } else {
      return (
        <GI_Display
          name={name}
          email={email}
          phone={phone}
          context={this}
          openEditMode={openEditModeFun}
        />
      );
    }
  }
}

export default GI_Main;
