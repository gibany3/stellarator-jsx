import React from 'react';
import PropTypes from 'prop-types'
import './style.css'

function Input({ type, name, placeholder, label, value, size, error, onInputChange }) {
    return (
        <div>
            <label htmlFor={`${label}`}>{`${label}`}</label>
            <br/>
            <input
                type={`${type}`}
                name={`${name}`}
                placeholder={`${placeholder}`}
                value={`${value}`}
                className={`${size}`}
                onChange={onInputChange}
            />
        </div>
    );
}

Notification.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    size: PropTypes.string,
    error: PropTypes.string,
    onInputChange: PropTypes.func
};

Notification.defaultProps = {
    type: 'text',
    size: 'medium'
};

export default Input;

