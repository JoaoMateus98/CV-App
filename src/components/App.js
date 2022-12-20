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

  handleGeneralInfoUpdate = (e, GIState) => {
    /* TODO: should grab GI State and update this.state.GeneralInfo to 
    then be passed to the profile component */

    const { name, email, phone } = GIState;

    e.preventDefault();
    console.log("hello: ", name);
    console.log("your email is: ", email);
    console.log("your phone is: ", phone);
  };

  render() {
    return (
      <div className="main-container">
        <GeneralInfo handleGeneralInfoUpdate={this.handleGeneralInfoUpdate} />
        <Education />
        <Professional />
        <Profile />
      </div>
    );
  }
}

export default App;
