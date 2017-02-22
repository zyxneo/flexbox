import React from "react";
import SelectInput from "./common/SelectInput";

export default class FlexForm extends React.Component {

  render () {
    let styleObject = this.props.styleObject
    let reference = this.props.reference;

    return (
      <div className={"flex__fprm flex__form_" + this.props.reference}
      >

        <SelectInput
          name="flexShrink"
          label="flexShrink"
          value={styleObject.flexShrink}
          defaultOption="0"
          options={[
            {value: 1, text: 1}
          ]}
          onChange={this.props.onChange}/>

        <SelectInput
          name="flexGrow"
          label="flexGrow"
          value={styleObject.flexGrow}
          defaultOption="0"
          options={[
            {value: 1, text: 1},
            {value: "auto", text: "auto"}
          ]}
          onChange={this.props.onChange}/>

        <SelectInput
          name="alignSelf"
          label="alignSelf"
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
      </div>
    );
  }
}
