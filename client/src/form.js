import React from 'react';
import {connect} from 'react-redux';
import {Field, reduxform} from 'redux-form';
const FileInput = ({
  input: { value: omitValue. onChange, onBlur, ...inputProps},
  meta: omiMeta,
  ...inputProps
}) => (
  <input
  onChange={adaptFileEventToValue(onChange)}
  onBlur={adaptFileEventToValue(onBlur)}
  type='file'
  className="custom-upload"
  (...inputProps)
  (...props)
  />
);

class Form extends React.Component {

};

renderField(field) {
  return(
    <div>
    <p>(field.label)</p>
    <input
    className="form-control"
    type={field.type}
    placeholder={field.placeholder}
    
  )
}
