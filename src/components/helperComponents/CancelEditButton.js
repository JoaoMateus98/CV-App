import React from "react";
import handleEditModeFun from "../../helperFunctions/handleEditMode";

class CancelEditButton extends React.Component {
  render() {
    const context = this.props.context;

    return (
      <button
        className="cancel-button"
        onClick={() => handleEditModeFun(context, false)}
      >
        CANCEL
      </button>
    );
  }
}

export default CancelEditButton;
