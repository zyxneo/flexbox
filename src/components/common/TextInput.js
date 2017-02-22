import React, {PropTypes} from "react";

const TextInput = ({name, label, onChange, placeholder, value, error}) => {
  return (
    <div className="form-group row">
      <label className="col-sm-6 col-form-label col-form-label-sm" htmlFor={name}>{label}</label>
      <div className="field col-sm-6">
        <input
          type="text"
          name={name}
          className="form-control form-control-sm"
          placeholder={placeholder}
          value={value}
          onChange={onChange} />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string
};

export default TextInput;
