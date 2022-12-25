import React from "react";

// sets handleEditMode boolean from passed class to true
class AddButton extends React.Component {
  render() {
    const contextMain = this.props.contextMain;

    return (
      <button
        className="add-button"
        onClick={() => this.props.handleEditMode(contextMain, true)}
      >
        Add
      </button>
    );
  }
}

export default AddButton;
