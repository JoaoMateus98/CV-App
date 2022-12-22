import React from "react";

// sets handleEditMode boolean from passed class to true
class EditButton extends React.Component {
  render() {
    const context = this.props.context;

    return (
      <button onClick={() => this.props.handleEditMode(context, true)}>
        Edit
      </button>
    );
  }
}

export default EditButton;
