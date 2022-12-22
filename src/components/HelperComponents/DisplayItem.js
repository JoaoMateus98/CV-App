import React from "react";

class DisplayItem extends React.Component {
  render() {
    const { category, value } = this.props;

    return (
      <p>
        {category}: {value}
      </p>
    );
  }
}

export default DisplayItem;
