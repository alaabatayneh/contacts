import React from 'react'
import PropTypes from 'prop-types';
import classnames from 'classnames'

const TextInputGroup = ({
    label,
    name,
    value,
    placeholder,
    type,
    onChange,
    error
}) => {
  return (
    <div className="form-group">
        <label htmlFor="{name}">{label}</label>
        <input 
            name={name} 
            className={classnames('form-control form-control-lg', {
                'is-invalid': error
            })} 
            placeholder={placeholder} 
            value={value} 
            type={type}
            onChange={onChange} />
            {error && <div className="invalid-feedback">{error}</div>}
    </div>
  )
}

TextInputGroup.PropTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    error: PropTypes.string
}

TextInputGroup.defaultProps = {
    text: 'text'
}

export default TextInputGroup