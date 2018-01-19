import React from 'react';
import PropTypes from 'prop-types'
import './style.css'

function Input({ type, name, placeholder, label, value, size, onInputChange }) {
    return (
        <div>
            <label>{label}
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                className={size}
                onChange={onInputChange}
            />
            </label>
        </div>
    );
}

Input.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    size: PropTypes.string,
    onInputChange: PropTypes.func
};

Input.defaultProps = {
    type: 'text',
    size: 'medium',
    value: '',
    name: '',
    label: '',
    placeholder: ''
};

export default Input;

