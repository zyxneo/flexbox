import React from "react";

export default class FlexItem extends React.Component {
  render () {
    return (
      <div className={"flex__item flex__item_" + this.props.number}>{"Item " + this.props.number}</div>
    );
  }
}
