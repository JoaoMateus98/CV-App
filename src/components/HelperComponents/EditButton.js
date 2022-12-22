import React from "react";

// sets handleEditMode boolean from passed class to true
class EditButton extends React.Component {
  render() {
    return (
      <button onClick={() => this.props.openEditMode(this.props.context)}>
        Edit
      </button>
    );
  }
}

export default EditButton;
