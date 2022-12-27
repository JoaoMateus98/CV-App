import React from "react";

class PeriodItem extends React.Component {
  render() {
    const { inputType, context } = this.props;

    return (
      <div className="input-container">
        <div id="period-start-container">
          <label htmlFor={`${inputType}-start-field`}>Start Date:</label>
          <input
            id={`${inputType}-start-field`}
            type="date"
            name="start"
            value={context.state.period.start}
            required
            onChange={(event) => {
              context.setState({
                period: {
                  start: event.target.value,
                  end: context.state.period.end,
                },
              });
            }}
          />
        </div>
        <div id="period-end-container">
          <label htmlFor={`${inputType}-end-field`}>End Date:</label>
          <input
            id={`${inputType}-end-field`}
            type="date"
            name="end"
            value={context.state.period.end}
            required
            onChange={(event) => {
              context.setState({
                period: {
                  start: context.state.period.start,
                  end: event.target.value,
                },
              });
            }}
          />
        </div>
      </div>
    );
  }
}

export default PeriodItem;
