import React from "react";
import GIDisplay from "./GI_Display";
import GIEdit from "./GI_Edit";
import openEditModeFun from "../../helperFunctions/openEditMode";

class GIMain extends React.Component {
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
    const thisComponent = this; // a little more sense for me

    if (EditMode) {
      return <GIEdit context={thisComponent} />;
    } else {
      return (
        <GIDisplay
          name={name}
          email={email}
          phone={phone}
          context={thisComponent}
          openEditMode={openEditModeFun}
        />
      );
    }
  }
}

export default GIMain;
