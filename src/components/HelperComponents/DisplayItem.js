import React from "react";

class DisplayItem extends React.Component {
  render() {
    return (
      <p>
        {this.props.category}: {this.props.value}
      </p>
    );
  }
}

export default DisplayItem;
