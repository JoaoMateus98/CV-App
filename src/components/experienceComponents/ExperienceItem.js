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
        <div className="job-company">
          <p>Company:</p>
          <p>{jobObj.company}</p>
        </div>
        <div className="job-position">
          <p>Position:</p>
          <p>{jobObj.position}</p>
        </div>
        <div className="job-description">
          <p>Description:</p>
          <p>{jobObj.description}</p>
        </div>
        <div className="job-period">
          <div>
            <p>Start Date:</p>
            <p>{jobObj.period.start}</p>
          </div>
          <div>
            <p>End Date:</p>
            <p>{jobObj.period.end}</p>
          </div>
          <button
            onClick={() => {
              this.handleEdit(context, jobObj);
            }}
          >
            Edit
          </button>
        </div>
      </div>
    );
  }
}

export default ExperienceItem;
