import React from "react";
import GIDisplay from "./GI_Display";
import GIEdit from "./GI_Edit";
import handleEditModeFun from "../../helperFunctions/handleEditMode";

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
    const GI_MetaInfo = this.state.GI_MetaInfo;
    const EditMode = this.state.EditMode;

    if (EditMode) {
      return <GIEdit context={this} GI_MetaInfo={GI_MetaInfo} />;
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
