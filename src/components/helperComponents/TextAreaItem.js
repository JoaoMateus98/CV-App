import React from "react";
import capitalizeFirstLetter from "../../helperFunctions/capitalizeFirstLetter";
import handleStateChange from "../../helperFunctions/handleStateChange";

class TextAreaItem extends React.Component {
  render() {
    const { inputType, rows, cols, context } = this.props;

    const inputTypeCapitalized = capitalizeFirstLetter(inputType);
    const savedValueState = context.state[`${inputType}`];

    return (
      <div className="input-container">
        <label htmlFor={`${inputType}-field`}>{inputTypeCapitalized}:</label>
        <textarea
          id={`${inputType}-field`}
          rows={rows}
          cols={cols}
          placeholder={`Enter ${inputTypeCapitalized} Here`}
          onChange={(event) =>
            handleStateChange(context, inputType, event.target.value)
          }
        >
          {savedValueState}
        </textarea>
      </div>
    );
  }
}

export default TextAreaItem;
