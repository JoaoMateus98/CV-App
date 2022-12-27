import React from "react";

class EducationItem extends React.Component {
  handleEdit = (context, schoolObj) => {
    context.setState({
      school: schoolObj.school,
      major: schoolObj.major,
      period: {
        start: schoolObj.period.start,
        end: schoolObj.period.end,
      },
      editMode: true,
      mode: "edit",
      schoolToEdit: schoolObj,
    });
  };

  handleDelete = (context, schoolObj) => {
    context.setState({
      schoolList: context.state.schoolList.filter(
        (school) => school !== schoolObj
      ),
    });
  };

  render() {
    const context = this.props.context;
    const schoolObj = this.props.schoolObj;

    return (
      <div className="school-container">
        <div className="period">
          <p>
            {schoolObj.period.start} - {schoolObj.period.end}
          </p>
        </div>
        <h1 className="major">{schoolObj.major}</h1>
        <p className="school">{schoolObj.school}</p>
        <div className="school-buttons">
          <button
            className="edit-button job-field"
            onClick={() => {
              this.handleEdit(context, schoolObj);
            }}
          >
            Edit
          </button>
          <button
            className="delete-button job-field"
            onClick={() => {
              this.handleDelete(context, schoolObj);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default EducationItem;
