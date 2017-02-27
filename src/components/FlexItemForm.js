import React from "react";
import SelectInput from "./common/SelectInput";
import TextInput from "./common/TextInput";

export default class FlexItemForm extends React.Component {

  render () {
    let styleObject = this.props.itemStyle
    let reference = this.props.reference;

    return (
      <div className={"col-md-6 flex__form flex__form_" + this.props.reference}
      >
        <h3>Item properties</h3>
        <SelectInput
          name="flexShrink"
          label="flex-shrink"
          value={styleObject.flexShrink}
          defaultOption="0"
          options={[
            {value: 1, text: 1}
          ]}
          onChange={this.props.onChange}/>

        <SelectInput
          name="flexGrow"
          label="flex-grow"
          value={styleObject.flexGrow}
          defaultOption="0"
          options={[
            {value: 1, text: 1},
            {value: "auto", text: "auto"}
          ]}
          onChange={this.props.onChange}/>

        <TextInput
          name="flexBasis"
          label="flex-basis"
          value={styleObject.flexBasis}
          onChange={this.props.onChange}/>

        <SelectInput
          name="alignSelf"
          label="align-self"
          value={styleObject.alignSelf}
          defaultOption="inherit"
          options={[
            {value: "flex-start", text: "flex-start"},
            {value: "flex-end", text: "flex-end"},
            {value: "center", text: "center"},
            {value: "baseline", text: "baseline"},
            {value: "stretch", text: "stretch"}
          ]}
          onChange={this.props.onChange}/>

        <TextInput
          name="order"
          label="order"
          value={styleObject.order}
          onChange={this.props.onChange}/>

        <TextInput
          name="margin"
          label="margin"
          value={styleObject.margin}
          onChange={this.props.onChange}/>
      </div>
    );
  }
}
