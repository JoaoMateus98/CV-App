import React from "react";

class SubmitButton extends React.Component {
  render() {
    const buttonID = this.props.buttonID;
    return <input id={buttonID} type={"submit"} value={"Submit"} />;
  }
}

export default SubmitButton;
