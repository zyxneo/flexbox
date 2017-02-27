import React, {PropTypes} from "react";
import FlexItem from "./FlexItem";
import FlexItemForm from "./FlexItemForm";
import FlexContainerForm from "./FlexContainerForm";
import CssControlsContainer from "./CssControlsContainer";
import CssPropertyControl from "./CssPropertyControl";


export default class Playground extends React.Component {
  constructor(props, context) {
    super();

    this.state = {
      numItem: 0,
      selectedItem: 0,
      itemArray: [],
      itemStyle: {
        flexShrink: "1",
        flexGrow: "0",
        flexBasis: "auto",
        order: "auto",
        alignSelf: "inherit",
        margin: ""
      },
      containerStyle: {
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "inherit",
        alignItems: "inherit",
        alignContent: "inherit",
        height: "100px"
      }
    };

    this.onItemClick = this.onItemClick.bind(this);
    this.onAddChild = this.onAddChild.bind(this);
    this.onRemoveChild = this.onRemoveChild.bind(this);
    this.onItemChange = this.onItemChange.bind(this);
    this.onContainerChange = this.onContainerChange.bind(this);
  }

  onItemClick (event) {
    event.preventDefault()

    let id = Number(event.currentTarget.dataset.id);
    // set the selectedItem id for all children
    let itemArray = this.state.itemArray;
    let itemStyle = this.state.itemStyle;
    for (var i = 0; i < itemArray.length; i++) {
      itemArray[i].selectedItem = id;
      if (i === id) {
        itemStyle = {
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
      itemStyle: itemStyle,
    });

  }

  componentDidMount () {
    this.onAddChild();
  }

  render() {
    return (
      <div className="tryout-flex">

        <p><span className="btn btn-success" onClick={this.onAddChild}>➕ Add Another Flex Item</span> <span  className="btn btn-danger" onClick={this.onRemoveChild}>➖ Remove Flex Item</span></p>

        <div class="flex__container flex__container_try" style={this.state.containerStyle}>
          {this.state.itemArray.map((item) =>
              <FlexItem id={item.id}
                        key={item.id}
                        onSelectItem={this.onItemClick}
                        allItems={item.totalItems}
                        item={item}
                        />
          )}
        </div>

        <div className="row">
          <FlexContainerForm onChange={this.onContainerChange}
                    containerStyle={this.state.containerStyle}/>

          <FlexItemForm onChange={this.onItemChange}
                    reference={this.state.selectedItem}
                    itemStyle={this.state.itemStyle}/>
        </div>
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
        flexShrink: "1",
        flexGrow: "0",
        flexBasis: "auto",
        order: "auto",
        alignSelf: "inherit",
        margin: ""
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

  onContainerChange (event) {

    const field = event.target.name;
    let containerStyle = this.state.containerStyle;
    let fieldValue = event.target.value;
    containerStyle[field] = fieldValue;

    this.setState({
      containerStyle: containerStyle
    });
  }

  onItemChange (event) {

    const field = event.target.name;
    let itemStyle = this.state.itemStyle;
    let fieldValue = event.target.value;
    itemStyle[field] = fieldValue;

    let itemArray = this.state.itemArray;
    let selectedItem = this.state.selectedItem;
    itemArray[selectedItem][field] = fieldValue;

    this.setState({
      itemArray: itemArray,
      itemStyle: itemStyle
    });
  }
}

Playground.propTypes = {
  itemArray: PropTypes.array,
  itemStyle: PropTypes.object
}
