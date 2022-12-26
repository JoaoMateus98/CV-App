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
        <div className="job-field">
          <p>Company:</p>
          <p>{jobObj.company}</p>
        </div>
        <div className="job-field">
          <p>Position:</p>
          <p>{jobObj.position}</p>
        </div>
        <div className="job-field">
          <p>Description:</p>
          <p>{jobObj.description}</p>
        </div>
        <div className="job-field">
          <p>Start Date:</p>
          <p>{jobObj.period.start}</p>
        </div>
        <div className="job-field">
          <p>End Date:</p>
          <p>{jobObj.period.end}</p>
        </div>
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
