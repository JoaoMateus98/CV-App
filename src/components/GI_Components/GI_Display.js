import React from "react";
import DisplayItem from "../helperComponents/DisplayItem";
import EditButton from "../helperComponents/EditButton";

class GIDisplay extends React.Component {
  render() {
    const { context, name, email, phone, handleEditMode } = this.props;
    return (
      <div className="GI_Display-main-container">
        <DisplayItem category={"Name"} value={name} />
        <DisplayItem category={"Email"} value={email} />
        <DisplayItem category={"Phone"} value={phone} />
        <EditButton context={context} handleEditMode={handleEditMode} />
      </div>
    );
  }
}

export default GIDisplay;
