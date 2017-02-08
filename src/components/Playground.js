import React from "react";
import FlexContainer from "./FlexContainer";
import FlexItem from "./FlexItem";
import CssControlsContainer from "./CssControlsContainer";
import CssPropertyControl from "./CssPropertyControl";


export default class Playground extends React.Component {
  constructor() {
    super();
    this.state = {
      numItem: 0,
      selectedIndex: 0,
      itemArray: [],
      styleArray: []
    };

    this.selectItem = this.selectItem.bind(this);
    this.onAddChild = this.onAddChild.bind(this);
    this.onRemoveChild = this.onRemoveChild.bind(this);
  }

  selectItem(e) {
    e.preventDefault();
    this.setState({
      selectedIndex: e.number
    });
    console.log(e);
  }

  render() {
    return (
      <div>
        <FlexContainer addChild={this.onAddChild} removeChild={this.onRemoveChild}>
          {this.state.itemArray}
        </FlexContainer>
      </div>
    );
  }

  onAddChild() {
    this.setState({
      numItem: this.state.numItem + 1,
      itemArray: this.state.itemArray.concat(<FlexItem number={this.state.numItem} key={this.state.numItem} onSelectItem={this.selectItem}/>)
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
