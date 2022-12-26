import React from "react";
import capitalizeFirstLetter from "../../helperFunctions/capitalizeFirstLetter";
import handleStateChange from "../../helperFunctions/handleStateChange";

class InputItem extends React.Component {
  render() {
    const { inputType, type, context } = this.props;

    const inputTypeCapitalized = capitalizeFirstLetter(inputType);
    const savedValueState = context.state[`${inputType}`];

    return (
      <div className="input-container">
        <label htmlFor={`${inputType}-field`}>{inputTypeCapitalized}:</label>
        <input
          id={`${inputType}-field`}
          type={type}
          placeholder={`Enter ${inputTypeCapitalized} Here`}
          value={savedValueState}
          onChange={(event) =>
            handleStateChange(context, inputType, event.target.value)
          }
          required
        />
      </div>
    );
  }
}

export default InputItem;
