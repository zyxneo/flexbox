import React from "react";

export default class FlexContainer extends React.Component {
  render () {
    return (
      <div className="tryout-flex">
        <div class="flex__container">
          {this.props.children}
        </div>
        <p><a href="#" onClick={this.props.addChild}>Add Another Flex Item</a></p>
        <p><a href="#" onClick={this.props.removeChild}>Remove Flex Item</a></p>
      </div>
    );
  }
}
