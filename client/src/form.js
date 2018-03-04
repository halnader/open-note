import React from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {createPost} from './actions';

const adaptFileEventToValue = delegate => e => delegate(e.target.files[0]);

const FileInput = ({
  input: { value: omitValue, onChange, onBlur, ...inputProps},
  meta: omiMeta,
  ...props
}) => (
  <input
  onChange={adaptFileEventToValue(onChange)}
  onBlur={adaptFileEventToValue(onBlur)}
  type='file'
  className="custom-upload"
  {...inputProps}
  {...props}
  />
);

class Form extends React.Component {
  renderField(field) {
    return(
      <div>
      <p>{field.label}</p>
      <input
        className="form-control"
        type={field.type}
        placeholder={field.placeholder}
        {...field.input}
    />
    </div>
    )
  };
};

export default reduxForm({
   form: 'postForm'
})(
  connect(null, {createPost})(Form)
);
