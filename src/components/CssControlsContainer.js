import React from "react";

export default class CssControlsContainer extends React.Component {
  render () {
    return (
      <div class="css__container">
        {this.props.children}
      </div>
    );
  }
}
