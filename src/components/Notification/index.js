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
                <div>{this.props.children}</div>
            </div>
        );
    }
}

Notification.propTypes = {
    type: PropTypes.string
};

Notification.defaultProps = {
    type: 'info'
};

export default Notification;