import React from "react";

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
    const { inputType, type, context } = this.props;

    const inputTypeCapitalized = this.capitalizeFirstLetter(inputType);
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
