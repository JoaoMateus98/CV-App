import React from "react";

// return a label and input element with very little info passed to it
// fully css ready
// Very Nice!

class InputItem extends React.Component {
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  handleStateChange = (context, inputType, value) => {
    switch (inputType) {
      // general information
      case "name":
        context.setState({ name: value });
        break;
      case "email":
        context.setState({ email: value });
        break;
      case "phone":
        context.setState({ phone: value });
        break;
      // experience
      case "company":
        context.setState({ company: value });
        break;
      case "position":
        context.setState({ position: value });
        break;

      default:
        console.log("Invalid input type!!!");
        break;
    }
  };

  render() {
    const inputType = this.props.inputType;
    const inputTypeCapitalized = this.capitalizeFirstLetter(inputType);
    const type = this.props.type;
    const context = this.props.context;
    const savedValueState = context.state[`${inputType}`];

    return (
      <div className={"input-container"}>
        <label htmlFor={`${inputType}-field`}>{inputTypeCapitalized}:</label>
        <input
          id={`${inputType}-field`}
          type={type}
          placeholder={`Enter ${inputTypeCapitalized} Here`}
          value={savedValueState}
          onChange={(event) =>
            this.handleStateChange(context, inputType, event.target.value)
          }
        />
      </div>
    );
  }
}

export default InputItem;
