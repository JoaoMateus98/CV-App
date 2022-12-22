import React from "react";

class InputItem extends React.Component {
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  handleStateChange = (context, inputType, value) => {
    switch (inputType) {
      case "name":
        context.setState({ name: value });
        break;
      case "email":
        context.setState({ email: value });
        break;
      case "phone":
        context.setState({ phone: value });
        break;

      default:
        console.log("Invalid input type!!!");
        break;
    }
  };

  convertType(inputType) {
    switch (inputType) {
      case "name":
        return "text";
      case "phone":
        return "tel";
      default:
        return inputType;
    }
  }

  render() {
    const inputType = this.props.inputType;
    const inputTypeCapitalized = this.capitalizeFirstLetter(inputType);
    const context = this.props.context;
    const savedValueState = context.state[`${inputType}`];

    return (
      <div id={`GI-Edit-container-${inputType}`}>
        <label htmlFor={`${inputType}-field`}>{inputTypeCapitalized}:</label>
        <input
          id={`${inputType}-field`}
          type={this.convertType(inputType)}
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
