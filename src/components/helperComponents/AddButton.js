import React from "react";

// sets handleEditMode boolean from passed class to true
class AddButton extends React.Component {
  handleClick = (context, handleEditMode) => {
    handleEditMode(context, true);

    context.setState({
      company: "",
      position: "",
      description: "",
      period: {
        start: "",
        end: "",
      },
      mode: "add",
    });
  };

  render() {
    const context = this.props.context;
    const handleEditMode = this.props.handleEditMode;

    return (
      <button
        className="add-button"
        onClick={() => this.handleClick(context, handleEditMode)}
      >
        Add
      </button>
    );
  }
}

export default AddButton;
