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

  handleChange = (e) => {
    // TODO: update the state properties

    switch (e.target.id) {
      case "name":
        this.setState({
          name: e.target.value,
        });
        break;
      case "email":
        this.setState({
          email: e.target.value,
        });
        break;
      case "phone":
        this.setState({
          phone: e.target.value,
        });
        break;
      default:
        console.log("invalid target");
    }
  };

  handleSubmit = (e, name) => {
    // TODO: should pass all state properties back to app
    this.props.handleGeneralInfoUpdate(e, name);
  };

  render() {
    return (
      <form className="general-main-container" onSubmit={this.handleSubmit}>
        <div className="divider">
          <label htmlFor="name">Name: </label>
          <input
            type={"text"}
            id="name"
            placeholder="Enter Name Here"
            onChange={this.handleChange}
            value={this.state.name}
          />
        </div>
        <div className="divider">
          <label htmlFor="email">Email: </label>
          <input
            type={"email"}
            id="email"
            placeholder="Enter Email Here"
            onChange={this.handleChange}
            value={this.state.email}
          ></input>
        </div>
        <div className="divider">
          <label htmlFor="phone">Phone: </label>
          <input
            type={"number"}
            id="phone"
            placeholder="Enter Name Here"
            onChange={this.handleChange}
            value={this.state.phone}
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
