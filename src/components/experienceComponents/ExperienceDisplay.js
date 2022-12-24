import React from "react";
import AddButton from "../helperComponents/AddButton";

class ExperienceDisplay extends React.Component {
  render() {
    const { context, handleEditMode } = this.props;

    return (
      <div className="experience-main-container">
        <AddButton context={context} handleEditMode={handleEditMode} />
      </div>
    );
  }
}

export default ExperienceDisplay;
