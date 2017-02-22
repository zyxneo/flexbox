import React, {PropTypes} from "react";
import FlexItem from "./FlexItem";
import FlexForm from "./FlexForm";
import CssControlsContainer from "./CssControlsContainer";
import CssPropertyControl from "./CssPropertyControl";


export default class Playground extends React.Component {
  constructor(props, context) {
    super();

    this.state = {
      numItem: 0,
      selectedItem: 0,
      itemArray: [],
      styleObject: {
        flexShrink: 1,
        flexGrow: 0,
        flexBasis: "auto",
        order: "auto",
        alignSelf: "inherit",

        margin: "inherit"
      }
    };

    this.onItemClick = this.onItemClick.bind(this);
    this.onAddChild = this.onAddChild.bind(this);
    this.onRemoveChild = this.onRemoveChild.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onItemClick (event) {
    event.preventDefault()

    let id = Number(event.currentTarget.dataset.id);
    // set the selectedItem id for all children
    let itemArray = this.state.itemArray;
    let styleObject = this.state.styleObject;
    for (var i = 0; i < itemArray.length; i++) {
      itemArray[i].selectedItem = id;
      if (i === id) {
        styleObject = {
          flexShrink: itemArray[i].flexShrink,
          flexGrow: itemArray[i].flexGrow,
          flexBasis: itemArray[i].flexBasis,
          order: itemArray[i].order,
          alignSelf: itemArray[i].alignSelf,

          margin: itemArray[i].margin
        }
      }
    }

    this.setState({
      selectedItem: id,
      styleObject: styleObject,
    });

  }

  render() {
    return (
      <div className="tryout-flex">

        <p><a href="#" onClick={this.onAddChild}>Add Another Flex Item</a> <a href="#" onClick={this.onRemoveChild}>Remove Flex Item</a></p>

        <div class="flex__container">
          {this.state.itemArray.map((item) =>
              <FlexItem id={item.id}
                        key={item.id}
                        onSelectItem={this.onItemClick}
                        allItems={item.totalItems}
                        item={item}
                        />
          )}
        </div>

        <FlexForm onChange={this.onChange}
                  reference={this.state.selectedItem}
                  styleObject={this.state.styleObject}/>
      </div>
    );
  }

  onAddChild() {
    // updating totalItems in all child in order to calculate rainbow color in hsl
    let itemArray = this.state.itemArray;
    for (var i = 0; i < itemArray.length; i++) {
      itemArray[i].totalItems = this.state.numItem + 1;
    }

    this.setState({
      numItem: this.state.numItem + 1,
      itemArray: itemArray.concat({
        id: this.state.numItem,
        totalItems: this.state.numItem,
        selectedItem: this.state.selectedItem,
        flexShrink: 1,
        flexGrow: 0,
        flexBasis: "auto",
        order: "auto",
        alignSelf: "inherit",

        margin: "inherit"
      })
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

  onChange (event) {

    const field = event.target.name;
    let styleObject = this.state.styleObject;
    let fieldValue = event.target.value;
    styleObject[field] = fieldValue;

    console.log("fieldValue: ", event.target.value);
    let itemArray = this.state.itemArray;
    let selectedItem = this.state.selectedItem;
    itemArray[selectedItem][field] = fieldValue;
    console.log("itemArray[selectedItem][field]: ", itemArray[selectedItem][field]);

    this.setState({
      itemArray: itemArray,
      styleObject: styleObject
    });
  }
}

Playground.propTypes = {
  itemArray: PropTypes.array,
  styleObject: PropTypes.object
}
