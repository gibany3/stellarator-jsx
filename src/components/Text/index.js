import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './style.css'

class Text extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                {this.props.heading?
                    <h1 className={`text text-${this.props.size}`}>
                        {this.props.children}
                    </h1>
                    :
                    (<p className={`text text-${this.props.size}`}>
                        {this.props.children}
                    </p>)
                }
            </div>
        );
    }
}

Text.propTypes = {
    heading: PropTypes.bool,
    size: PropTypes.string
};

Text.defaultProps = {
    heading: false,
    size: 'medium'
};

export default Text;