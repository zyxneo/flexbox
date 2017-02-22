import React from "react";

export default class FlexItem extends React.Component {

  render () {
    let item = this.props.item;
    let id = item.id;
    let rainbowColor = "hsl(" + (208 + Number((360 / (this.props.allItems + 1))) * Number(this.props.id)) + ", 98%, 43%)";
    let isActive = (id === item.selectedItem);
    let itemStyle = {
      color: isActive ? rainbowColor : "#fff",
      background: isActive ? "#fff": rainbowColor,
      flexShrink: item.flexShrink,
      flexGrow: item.flexGrow,
      flexBasis: item.flexBasis,
      alignSelf: item.alignSelf,
      order: item.order,
      margin: item.margin

    };
    let isActiveClass = isActive ? " is-active" : "";

    return (
      <div className={"flex__item flex__item_" + id + isActiveClass + " is-clickable"}
          onClick={this.props.onSelectItem}
          style={itemStyle}
          data-id={id}
      >
        {"Item " + id}
      </div>
    );
  }
}
