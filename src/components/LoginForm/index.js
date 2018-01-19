import React from 'react';
import PropTypes from 'prop-types'
import './style.css'

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEmail(event) {
        this.setState({email: event.target.value});
    }

    handlePassword(event) {
        this.setState({password: event.target.value});
    }

    handleSubmit(event) {
        console.log('email: ' + this.state.email);
        console.log('password: : ' + this.state.password);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Email:
                    <input
                        type='email'
                        value={this.state.email}
                        onChange={this.handleEmail}/>
                </label>
                <br/>
                <label>Password
                    <input
                        type='password'
                        value={this.state.password}
                        onChange={this.handlePassword}/>
                </label>
                <br/>
                <input type="submit" value="Submit"/>
            </form>

        );
    }
}

LoginForm.propTypes = {
    onSubmit: PropTypes.func
};

export default LoginForm;

