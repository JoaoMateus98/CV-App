import React from "react";

// turns on edit mode
class EditButton extends React.Component {
  render() {
    return (
      <button
        onClick={() => this.props.handleEditMode(this.props.context, true)}
      >
        Edit
      </button>
    );
  }
}

export default EditButton;
