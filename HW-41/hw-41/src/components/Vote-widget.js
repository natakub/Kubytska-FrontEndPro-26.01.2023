import React from "react";
import PropTypes from "prop-types";
import "./Vote-widget.css";

class VoteWidget extends React.Component {
  static propTypes = {
    smileIcon: PropTypes.element,
    smilePooIcon: PropTypes.element,
    heartsIcon: PropTypes.element,
  };

  static defaultProps = {
    smileIcon: "🙂",
    smilePooIcon: "💩",
    heartsIcon: "😍",
  };

  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          type: props.smileIcon,
          count: 0,
        },
        {
          type: props.smilePooIcon,
          count: 0,
        },
        {
          type: props.heartsIcon,
          count: 0,
        },
      ],
      showResult: false,
      biggestNumber: null,
    };
  }

  handleClick = (type) => {
    const updatedData = this.state.data.map((item) =>
      item.type === type ? { ...item, count: item.count + 1 } : item
    );

    this.setState({ data: updatedData });
  };

  handleResultClick = () => {
    const { data } = this.state;

    if (data.some((item) => item.count > 0)) {
      const biggestNumber = Math.max(
        ...this.state.data.map((item) => item.count)
      );
      const result = data.filter((item) => item.count === biggestNumber);

      this.setState({
        showResult: true,
        biggestNumber: result,
      });
    } else {
      this.setState({ showResult: true });
    }
  };

  handleResetClick = () => {
    const resetData = this.state.data.map((item) => ({
      ...item,
      count: 0,
    }));

    this.setState({
      data: resetData,
      showResult: false,
      biggestNumber: null,
    });
  };

  render() {
    const { data, showResult, biggestNumber } = this.state;

    return (
      <div className="Widget">
        <h1>Click on any icon to leave a reaction</h1>
        <ul>
          {data.map((item) => (
            <ListItem
              type={item.type}
              count={item.count}
              onIconClick={() => this.handleClick(item.type)}
            />
          ))}
        </ul>
        <GetResultButtons
          onResultClick={this.handleResultClick}
          onResetClick={this.handleResetClick}
        />
        <ResultItem showResult={showResult} biggestNumber={biggestNumber} />
      </div>
    );
  }
}

function ListItem(props) {
  return (
    <li>
      <button onClick={props.onIconClick}>{props.type}</button>
      <span>{props.count}</span>
    </li>
  );
}

function GetResultButtons(props) {
  return (
    <div>
      <button onClick={props.onResetClick}>Reset Results</button>
      <button onClick={props.onResultClick}>Show Results</button>
    </div>
  );
}

function ResultItem(props) {
  return (
    props.showResult &&
    (props.biggestNumber ? (
      <IsIconArray biggestNumber={props.biggestNumber} />
    ) : (
      <p>Click at least one smile icon to see the result</p>
    ))
  );
}

function IsIconArray(props) {
  return Array.isArray(props.biggestNumber) ? (
    props.biggestNumber.map((item) => <span key={item.type}>{item.type}</span>)
  ) : (
    <span>{props.biggestNumber.type}</span>
  );
}

export default VoteWidget;
