import React from "react";
import handleSubmitFunc from "../../helperFunctions/handleSubmit";
import SubmitButton from "../HelperComponents/SubmitButton";

class Gi_Edit extends React.Component {
  render() {
    const { context } = this.props;

    return (
      <form onSubmit={() => handleSubmitFunc(context)}>
        <div>Edit window placeholder</div>
        <SubmitButton />
      </form>
    );
  }
}

export default Gi_Edit;
