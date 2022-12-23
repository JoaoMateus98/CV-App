import React from "react";
import DisplayItem from "../helperComponents/DisplayItem";
import EditButton from "../helperComponents/EditButton";
import "../styles/GI_Display.css";

class GIDisplay extends React.Component {
  render() {
    const { context, name, email, phone, handleEditMode } = this.props;
    return (
      <div>
        <DisplayItem category={"Name"} value={name} />
        <DisplayItem category={"Email"} value={email} />
        <DisplayItem category={"Phone"} value={phone} />
        <EditButton
          buttonID="GI-Edit-edit-button"
          context={context}
          handleEditMode={handleEditMode}
        />
      </div>
    );
  }
}

export default GIDisplay;
