import React from "react";

class GIDisplayItem extends React.Component {
  render() {
    const { category, value } = this.props;

    return (
      <div className="GI-Display-container">
        <p id={category}>{value}</p>
      </div>
    );
  }
}

export default GIDisplayItem;
