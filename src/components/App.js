import React from "react";
import "./styles/App.css";
import GeneralInfo from "./GeneralInfo";
import Education from "./Education";
import Professional from "./Professional";
import Profile from "./Profile";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      GeneralInfo: {
        name: "",
        email: "",
        phone: "",
      },
    };
  }

  getGIStateProps = (e, GIState) => {
    /* TODO: should grab GI State and update this.state.GeneralInfo to 
    then be passed to the profile component */

    const { name, email, phone } = GIState;

    e.preventDefault();
    this.handleGIStateUpdate(name, email, phone);
  };

  handleGIStateUpdate = (newName, newEmail, newPhone) => {
    this.setState({
      GeneralInfo: {
        name: newName,
        email: newEmail,
        phone: newPhone,
      },
    });
  };

  render() {
    return (
      <div className="main-container">
        <GeneralInfo getGIStateProps={this.getGIStateProps} />
        <Education />
        <Professional />
        <Profile GeneralInfo={this.state.GeneralInfo} />
      </div>
    );
  }
}

export default App;
