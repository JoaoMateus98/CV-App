import React from "react";
import handleEditModeFun from "../../helperFunctions/handleEditMode";
import EducationEdit from "./EducationEdit";
import EducationItem from "./EducationItem";
import AddButton from "../helperComponents/AddButton";
import uniqid from "uniqid";
import "../styles/education.css";

class EducationMain extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      callingFrom: "education",
      school: "",
      major: "",
      period: {
        start: "",
        end: "",
      },
      schoolList: [],
      editMode: false,
      mode: "add",
      schoolToEdit: "",
    };
  }

  createNewSchool = () => {
    const school = {
      key: uniqid(),
      school: this.state.school,
      major: this.state.major,
      period: {
        start: this.state.period.start,
        end: this.state.period.end,
      },
    };

    return school;
  };

  createNewEducationItemFun = () => {
    const school = this.createNewSchool();

    this.setState({
      schoolList: this.state.schoolList.concat(school),
    });
  };

  editSchool = () => {
    Object.assign(this.state.schoolToEdit, {
      school: this.state.school,
      major: this.state.major,
      period: {
        start: this.state.period.start,
        end: this.state.period.end,
      },
    });
  };

  render() {
    if (this.state.editMode) {
      return (
        <EducationEdit
          context={this}
          createNewEducationItem={this.createNewEducationItemFun}
          mode={this.state.mode}
          editSchool={this.editSchool}
        />
      );
    } else {
      return (
        <div className="education-main-container">
          <p id="education-title" className="right-title">
            EDUCATION
          </p>
          {this.state.schoolList.map((school) => {
            return (
              <EducationItem
                context={this}
                key={school.key}
                schoolObj={school}
              />
            );
          })}
          <AddButton context={this} handleEditMode={handleEditModeFun} />
        </div>
      );
    }
  }
}

export default EducationMain;
