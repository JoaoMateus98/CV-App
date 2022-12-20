import React from "react";

class Profile extends React.Component {
  render() {
    const { name, email, phone } = this.props.GeneralInfo;

    return (
      <div>
        <p>Profile placeholder</p>
        <p>your name is: {name}</p>
      </div>
    );
  }
}

export default Profile;
