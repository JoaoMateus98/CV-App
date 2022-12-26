import React from "react";

class GIDisplayItem extends React.Component {
  render() {
    const { category, value } = this.props;

    return (
      <div className="GI-Display-container">
        <p>{value}</p>
      </div>
    );
  }
}

export default GIDisplayItem;
