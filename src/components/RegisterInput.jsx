import React from "react";
import PropTypes from "prop-types";
import useInput from "../utils/useInput";

function RegisterInput({ register }) {
    const [name, onNameChange] = useInput('');
    const [email, onEmailChange] = useInput('');
    const [password, onPasswordChange] = useInput('');

    function onSubmitHandler(event) {
        event.preventDefault();

        register({
            name: name,
            email: email,
            password: password,
        })
    }

        return (
            <form className="input-register" onSubmit={onSubmitHandler}>
            <label>Name</label>
            <input type="text" value={name} onChange={onNameChange} />
            <label>Email</label>
            <input type="email" value={email} onChange={onEmailChange} />
            <label>Password</label>
            <input type="password" value={password} autoComplete='current-password' onChange={onPasswordChange} />
            <label>Confirm Password</label>
            <input type="password" value={password} onChange={onPasswordChange} />
            <button>Register</button>
            </form>
        )
}

RegisterInput.propTypes = {
    register: PropTypes.func.isRequired,
}

export default RegisterInput;