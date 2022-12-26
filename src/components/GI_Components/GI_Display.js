import React from "react";
import GIDisplayItem from "./GI_HelperComponents/GI_DisplayItem";
import EditButton from "../helperComponents/EditButton";

class GIDisplay extends React.Component {
  render() {
    const { context, firstName, lastName, email, phone, handleEditMode } =
      this.props;
    return (
      <div className="GI_main-container">
        <GIDisplayItem category={"FirstName"} value={firstName} />
        <GIDisplayItem category={"LastName"} value={lastName} />
        <p id="GI-contact">CONTACTS</p>
        <GIDisplayItem category={"Email"} value={email} />
        <GIDisplayItem category={"Phone"} value={phone} />
        <EditButton context={context} handleEditMode={handleEditMode} />
      </div>
    );
  }
}

export default GIDisplay;
