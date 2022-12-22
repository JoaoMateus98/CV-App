import React from "react";
import DisplayItem from "../HelperComponents/DisplayItem";

class GI_Display extends React.Component {
  render() {
    const { name, email, phone } = this.props;
    return (
      <div>
        <DisplayItem category={"Name"} value={name} />
        <DisplayItem category={"Email"} value={email} />
        <DisplayItem category={"Phone"} value={phone} />
      </div>
    );
  }
}

export default GI_Display;
