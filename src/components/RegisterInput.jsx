import React from "react";
import PropTypes from "prop-types";

class RegisterInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
        }

    this.onNameChange = this.onNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onNameChange(event) {
        this.setState(() => {
            return {
                name: event.target.value
            }
        })
    }

    onEmailChange(event) {
        this.setState(() => {
            return {
                email: event.target.value
            }
        })
    }

    onPasswordChange(event) {
        this.setState(() => {
            return {
                password: event.target.value
            }
        })
    }

    onSubmitHandler(event) {
        event.preventDefault();

        this.props.register({
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
        })
    }

    render() {
        return (
            <form className="input-register" onSubmit={this.onSubmitHandler}>
            <label>Name</label>
            <input type="text" value={this.state.name} onChange={this.onNameChange} />
            <label>Email</label>
            <input type="email" value={this.state.email} onChange={this.onEmailChange} />
            <label>Password</label>
            <input type="password" value={this.state.password} autoComplete='current-password' onChange={this.onPasswordChange} />
            <label>Confirm Password</label>
            <input type="password" value={this.state.password} onChange={this.onPasswordChange} />
            <button>Register</button>
            </form>
        )
    }
}

RegisterInput.propTypes = {
    register: PropTypes.func.isRequired,
}

export default RegisterInput;