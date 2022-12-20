import React from "react";

class Profile extends React.Component {
  render() {
    return (
      <div>
        <p>Profile placeholder</p>
        <p>{this.props.name}</p>
      </div>
    );
  }
}

export default Profile;
