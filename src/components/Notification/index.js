import React from 'react';
import PropTypes from 'prop-types'
import './style.css'

class Notification extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className={`notification ${this.props.type}`}>
                <p>{this.props.text}</p>
            </div>
        );
    }
}

Notification.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string
};

Notification.defaultProps = {
    type: 'info',
    text: 'Default notification'
};

export default Notification;