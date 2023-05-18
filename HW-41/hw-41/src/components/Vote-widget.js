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
      icons: [
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
    const updatedIcons = this.state.icons.map((icon) =>
      icon.type === type ? { ...icon, count: icon.count + 1 } : icon
    );

    this.setState({ icons: updatedIcons });
  };

  handleResultClick = () => {
    const { icons } = this.state;

    if (icons.some((icon) => icon.count > 0)) {
      const biggestNumber = Math.max(
        ...this.state.icons.map((icon) => icon.count)
      );
      const result = icons.filter((icon) => icon.count === biggestNumber);

      this.setState({
        showResult: true,
        biggestNumber: result,
      });
    } else {
      this.setState({ showResult: true });
    }
  };

  handleResetClick = () => {
    const resetIcons = this.state.icons.map((icon) => ({
      ...icon,
      count: 0,
    }));

    this.setState({
      icons: resetIcons,
      showResult: false,
      biggestNumber: null,
    });
  };

  render() {
    const { icons, showResult, biggestNumber } = this.state;

    return (
      <div className="Widget">
        <h1 className="Widget-title">Click on any icon to leave a reaction</h1>
        <ul className="Widget-list">
          {icons.map((icon, index) => (
            <ListItem
              key={index}
              iconType={icon.type}
              iconCount={icon.count}
              onIconClick={() => this.handleClick(icon.type)}
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
    <li className="Widget-list-item">
      <button className="Widget-icon-btn" onClick={props.onIconClick}>
        {props.iconType}
      </button>
      <span>{props.iconCount}</span>
    </li>
  );
}

ListItem.propTypes = {
  onIconClick: PropTypes.func,
  iconType: PropTypes.element,
  iconCount: PropTypes.number,
};

function GetResultButtons(props) {
  return (
    <div>
      <button className="Widget-result-btns" onClick={props.onResetClick}>
        Reset Results
      </button>
      <button className="Widget-result-btns" onClick={props.onResultClick}>
        Show Results
      </button>
    </div>
  );
}

GetResultButtons.propTypes = {
  onResetClick: PropTypes.func,
  onResultClick: PropTypes.func,
};

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

ResultItem.propTypes = {
  showResult: PropTypes.bool,
  biggestNumber: PropTypes.array,
};

function IsIconArray(props) {
  return Array.isArray(props.biggestNumber) ? (
    props.biggestNumber.map((icon) => (
      <span className="result-icon" key={icon.type}>
        {icon.type}
      </span>
    ))
  ) : (
    <span>{props.biggestNumber.type}</span>
  );
}

IsIconArray.propTypes = {
  biggestNumber: PropTypes.array,
};

export default VoteWidget;
