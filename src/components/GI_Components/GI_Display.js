import React from "react";
import GIDisplayItem from "./GI_HelperComponents/GI_DisplayItem";
import EditButton from "../helperComponents/EditButton";

class GIDisplay extends React.Component {
  render() {
    const { context, name, email, phone, handleEditMode } = this.props;
    return (
      <div className="GI_main-container">
        <GIDisplayItem category={"Name"} value={name} />
        <GIDisplayItem category={"Email"} value={email} />
        <GIDisplayItem category={"Phone"} value={phone} />
        <EditButton context={context} handleEditMode={handleEditMode} />
      </div>
    );
  }
}

export default GIDisplay;
