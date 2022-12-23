import React from "react";

class GIDisplayItem extends React.Component {
  render() {
    const { category, value } = this.props;

    return (
      <div className="GI-Display-container">
        <p>{category}:</p>
        <p>{value}</p>
      </div>
    );
  }
}

export default GIDisplayItem;
