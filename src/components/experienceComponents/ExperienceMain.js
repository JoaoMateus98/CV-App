import React from "react";
import handleEditModeFun from "../../helperFunctions/handleEditMode";
import ExperienceEdit from "./ExperienceEdit";
import ExperienceItem from "./ExperienceItem";
import AddButton from "../helperComponents/AddButton";
import "../styles/experience.css";

class ExperienceMain extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      company: "N/A",
      position: "N/A",
      description: "N/A",
      period: {
        start: "N/A",
        end: "N/A",
      },
      jobList: [],
      editMode: false,
    };
  }

  createNewJob = () => {
    const job = {
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

    console.log(this.state.jobList);
  };

  render() {
    if (this.state.editMode) {
      return (
        <ExperienceEdit
          context={this}
          createNewExperienceItem={this.createNewExperienceItemFun}
        />
      );
    } else {
      return (
        <div className="experience-main-container">
          {this.state.jobList.map(() => {
            return <ExperienceItem />;
          })}
          <AddButton contextMain={this} handleEditMode={handleEditModeFun} />
        </div>
      );
    }
  }
}

export default ExperienceMain;
