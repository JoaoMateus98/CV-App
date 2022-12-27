import React from "react";
import handleEditModeFun from "../../helperFunctions/handleEditMode";
import ExperienceEdit from "./ExperienceEdit";
import ExperienceItem from "./ExperienceItem";
import AddButton from "../helperComponents/AddButton";
import uniqid from "uniqid";
import "../styles/experience.css";

class ExperienceMain extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      callingFrom: "experience",
      company: "",
      position: "",
      description: "",
      period: {
        start: "",
        end: "",
      },
      jobList: [],
      editMode: false,
      mode: "add",
      jobToEdit: "",
    };
  }

  createNewJob = () => {
    const job = {
      key: uniqid(),
      company: this.state.company,
      position: this.state.position,
      description: this.state.description,
      period: {
        start: this.state.period.start,
        end: this.state.period.end,
      },
    };

    return job;
  };

  createNewExperienceItemFun = () => {
    const job = this.createNewJob();

    this.setState({
      jobList: this.state.jobList.concat(job),
    });
  };

  editJob = () => {
    Object.assign(this.state.jobToEdit, {
      company: this.state.company,
      position: this.state.position,
      description: this.state.description,
      period: {
        start: this.state.period.start,
        end: this.state.period.end,
      },
    });
  };

  render() {
    if (this.state.editMode) {
      return (
        <ExperienceEdit
          context={this}
          createNewExperienceItem={this.createNewExperienceItemFun}
          mode={this.state.mode}
          editJob={this.editJob}
        />
      );
    } else {
      return (
        <div className="experience-main-container">
          <p id="experience-title">WORK EXPERIENCE</p>
          {this.state.jobList.map((job) => {
            return <ExperienceItem context={this} key={job.key} jobObj={job} />;
          })}
          <AddButton context={this} handleEditMode={handleEditModeFun} />
        </div>
      );
    }
  }
}

export default ExperienceMain;
