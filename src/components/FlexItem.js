import React from "react";

export default class FlexItem extends React.Component {

  itemStyle = {
    color: "blue",
    background: "yellow",
  };

  render () {
    return (
      <div className={"flex__item flex__item_" + this.props.number}
          onClick={this.props.onSelectItem}
          style={this.itemStyle}
      >
        {"Item " + this.props.number}
      </div>
    );
  }
}
