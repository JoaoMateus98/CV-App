import React from "react";
import DisplayItem from "../HelperComponents/DisplayItem";
import EditButton from "../HelperComponents/EditButton";

class GI_Display extends React.Component {
  render() {
    const { name, email, phone, context, handleEditMode } = this.props;
    return (
      <div>
        <DisplayItem category={"Name"} value={name} />
        <DisplayItem category={"Email"} value={email} />
        <DisplayItem category={"Phone"} value={phone} />
        <EditButton context={context} handleEditMode={handleEditMode} />
      </div>
    );
  }
}

export default GI_Display;
