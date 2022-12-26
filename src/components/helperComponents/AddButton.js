import React from "react";

// sets handleEditMode boolean from passed class to true
class AddButton extends React.Component {
  render() {
    const context = this.props.context;

    return (
      <button
        className="add-button"
        onClick={() => this.props.handleEditMode(context, true)}
      >
        Add
      </button>
    );
  }
}

export default AddButton;
