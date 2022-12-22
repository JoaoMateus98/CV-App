import React from "react";
import GI_Display from "./GI_Display";
import Gi_Edit from "./GI_Edit";

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
    return <GI_Display />;
  }
}

export default GI_Main;
