import React from "react";

export default class CssPropertyControl extends React.Component {
  render () {
    return (
      <div className={"item-" + this.props.number}>
        <input type="number" value="0"/>
        <style>
          .flex__item_...
        </style>
        {"Item-" + this.props.number + " Properties"}

      </div>
    );
  }
}
