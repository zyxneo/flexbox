import React from "react";
import FlexContainer from "./FlexContainer";
import FlexItem from "./FlexItem";


export default class Playground extends React.Component {
  constructor() {
    super();
    this.state = {
      numItem: 0,
      itemArray: []
    };
  }

  render() {
    return (
      <FlexContainer addChild={this.onAddChild.bind(this)} removeChild={this.onRemoveChild.bind(this)}>
        {this.state.itemArray}
      </FlexContainer>
    );
  }

  onAddChild() {
    this.setState({
      numItem: this.state.numItem + 1,
      itemArray: this.state.itemArray.concat(<FlexItem number={this.state.numItem} key={this.state.numItem}/>)
    });
  }

  onRemoveChild() {
    // remove only if exist
    if (this.state.numItem > 0) {
      this.setState({
        numItem: this.state.numItem - 1,
        itemArray: this.state.itemArray.slice(0, -1)
      });
    }
  }
}
