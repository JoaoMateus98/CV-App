import React from "react";

class Profile extends React.Component {
  render() {
    const { name, email, phone } = this.props.GeneralInfo;

    return (
      <div>
        <p>
          My name: {name}{" "}
          <button onClick={() => this.props.handleEdits("GI", "name")}>
            Edit
          </button>
        </p>
        <p>
          My Email: {email}{" "}
          <button onClick={() => this.props.handleEdits("GI", "email")}>
            Edit
          </button>
        </p>
        <p>
          My Phone: {phone}{" "}
          <button onClick={() => this.props.handleEdits("GI", "phone")}>
            Edit
          </button>
        </p>
      </div>
    );
  }
}

export default Profile;
