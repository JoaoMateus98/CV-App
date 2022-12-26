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
        <button
          className="edit-button job-field"
          onClick={() => {
            this.handleEdit(context, jobObj);
          }}
        >
          Edit
        </button>
      </div>
    );
  }
}

export default ExperienceItem;
