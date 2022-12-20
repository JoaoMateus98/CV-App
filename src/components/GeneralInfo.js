import React from "react";
import "./styles/GeneralInfo.css";

class GeneralInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      phone: "",
    };
  }

  handleSubmit = (e, name) => {
    this.props.handleGeneralInfoUpdate(e, name);
  };

  render() {
    return (
      <form className="general-main-container" onSubmit={this.handleSubmit}>
        <div className="divider">
          <label htmlFor="name">Name: </label>
          <input type={"text"} id="name" placeholder="Enter Name Here"></input>
        </div>
        <div className="divider">
          <label htmlFor="email">Email: </label>
          <input
            type={"email"}
            id="email"
            placeholder="Enter Email Here"
          ></input>
        </div>
        <div className="divider">
          <label htmlFor="phone">Phone: </label>
          <input
            type={"number"}
            id="phone"
            placeholder="Enter Name Here"
          ></input>
        </div>
        <div className="divider">
          <input type={"submit"} value="Add" />
        </div>
      </form>
    );
  }
}

export default GeneralInfo;
