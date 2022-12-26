import React from "react";

class ExperienceItem extends React.Component {
  handleEdit = (context, jobObj) => {
    context.setState({
      company: jobObj.company,
      position: jobObj.position,
      description: jobObj.description,
      period: {
        start: jobObj.period.start,
        end: jobObj.period.end,
      },
      editMode: true,
      mode: "edit",
      jobToEdit: jobObj,
    });
  };

  handleDelete = (context, jobObj) => {
    context.setState({
      jobList: context.state.jobList.filter((job) => job !== jobObj),
    });
  };

  render() {
    const context = this.props.context;
    const jobObj = this.props.jobObj;
    return (
      <div className="job-container">
        <div className="period">
          <p>
            {jobObj.period.start} - {jobObj.period.end}
          </p>
        </div>
        <h1 className="position">{jobObj.position}</h1>
        <p>{jobObj.company}</p>
        <p className="description">{jobObj.description}</p>
        <div className="job-buttons">
          <button
            className="edit-button job-field"
            onClick={() => {
              this.handleEdit(context, jobObj);
            }}
          >
            Edit
          </button>
          <button
            className="delete-button job-field"
            onClick={() => {
              this.handleDelete(context, jobObj);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default ExperienceItem;
