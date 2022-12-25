import React from "react";
import ExperienceEdit from "./ExperienceEdit";
import AddButton from "../helperComponents/AddButton";

class ExperienceDisplay extends React.Component {
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
    const { contextMain, handleEditMode, editMode } = this.props;

    if (editMode) {
      return (
        <ExperienceEdit
          contextMain={contextMain}
          createNewExperienceItem={this.createNewExperienceItemFun}
        />
      );
    } else {
      return (
        <div className="experience-main-container">
          <AddButton
            contextMain={contextMain}
            handleEditMode={handleEditMode}
          />
        </div>
      );
    }
  }
}

export default ExperienceDisplay;
