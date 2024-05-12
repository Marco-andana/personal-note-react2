import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import LoginInput from "../components/LoginInput";
import { login } from "../utils/network-data"
import LocaleContext from "../contexts/LocaleContext";

function LoginPage({ loginSuccess }) {
    async function onLogin({ email, password }) {
        const { error, data } = await login({ email, password });

        if (!error) {
            loginSuccess(data);
        }
    }

    const { locale } = React.useContext(LocaleContext);

    return (
        <section className="login-page">
            <h2>{locale === 'id' ? 'Silahkan login untuk menggunakan aplikasi.' : 'Login to use application'}</h2>
            <LoginInput login={onLogin} />
            <p>{locale === 'id' ? 'Belum punya akun? ' : 'Dont have account? '} <Link to="/register">{locale === 'id' ? 'Daftar di sini' : 'Register here'}</Link></p>
        </section>
    )
}
    LoginPage.propTypes = {
        loginSuccess: PropTypes.func.isRequired
    }


    export default LoginPage;