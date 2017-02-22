import React from "react";
import SelectInput from "./common/SelectInput";
import TextInput from "./common/TextInput";

export default class FlexContainerForm extends React.Component {

  render () {
    let styleObject = this.props.styleObject

    return (
      <div className="col-md-6 flex__form">
        <h3>Container properties</h3>
        <SelectInput
          name="flexDirection"
          label="flex-direction"
          value={styleObject.flexDirection}
          defaultOption="row"
          options={[
            {value: "row-reverse", text: "row-reverse"},
            {value: "column", text: "column"},
            {value: "column-reverse", text: "column-reverse"}
          ]}
          onChange={this.props.onChange}/>

        <SelectInput
          name="flexWrap"
          label="flex-wrap"
          value={styleObject.flexWrap}
          defaultOption="nowrap"
          options={[
            {value: "wrap", text: "wrap"},
            {value: "wrap-reverse", text: "wrap-reverse"}
          ]}
          onChange={this.props.onChange}/>

        <SelectInput
          name="justifyContent"
          label="justify-content"
          value={styleObject.justifyContent}
          defaultOption="inherit"
          options={[
            {value: "flex-start", text: "flex-start"},
            {value: "flex-end", text: "flex-end"},
            {value: "center", text: "center"},
            {value: "space-between", text: "space-between"},
            {value: "space-around", text: "space-around"},
          ]}
          onChange={this.props.onChange}/>

        <SelectInput
          name="alignItems"
          label="align-items"
          value={styleObject.alignItems}
          defaultOption="inherit"
          options={[
            {value: "flex-start", text: "flex-start"},
            {value: "flex-end", text: "flex-end"},
            {value: "center", text: "center"},
            {value: "baseline", text: "baseline"},
            {value: "stretch", text: "stretch"},
          ]}
          onChange={this.props.onChange}/>

        <SelectInput
          name="alignContent"
          label="align-content"
          value={styleObject.alignContent}
          defaultOption="inherit"
          options={[
            {value: "flex-start", text: "flex-start"},
            {value: "flex-end", text: "flex-end"},
            {value: "center", text: "center"},
            {value: "space-between", text: "space-between"},
            {value: "space-around", text: "space-around"},
            {value: "stretch", text: "stretch"},
          ]}
          onChange={this.props.onChange}/>

        <TextInput
          name="height"
          label="height"
          value={styleObject.height}
          onChange={this.props.onChange}/>

      </div>
    );
  }
}
