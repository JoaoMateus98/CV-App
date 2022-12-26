import React from "react";

class ExperienceItem extends React.Component {
  constructor(props) {}

  render() {
    const jobObj = this.props.jobObj;

    console.log(jobObj);
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
        </div>
      </div>
    );
  }
}

export default ExperienceItem;
