import React from "react";
import PropTypes from "prop-types";
import useInput from "../utils/useInput";

function LoginInput({ login }) {
    const [email, onEmailChange] = useInput('');
    const [password, onPasswordChange] = useInput('');

    function onSubmitHandler(event) {
        event.preventDefault();

        login({
            email,
            password,
        })
    }

        return (
            <form onSubmit={onSubmitHandler} className="input-login">
                <label>Email</label>
                <input type="email" value={email} onChange={onEmailChange} />
                <label>Password</label>
                <input type="password" value={password} onChange={onPasswordChange} />
                <button>Login</button>
            </form>
        )
}
    LoginInput.propTypes = {
        login: PropTypes.func.isRequired,
}

export default LoginInput;