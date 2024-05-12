import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FiSun, FiMoon, FiLogOut } from "react-icons/fi";
import { SiGoogletranslate } from "react-icons/si";
import LocaleContext, { LocaleConsumer } from "../contexts/LocaleContext";
import ThemeContext, { ThemeConsumer } from "../contexts/ThemeContext";

function Navigation({logout, name, authedUser}) {

    if(authedUser === null) {
        return (
            <LocaleConsumer>
            {
            ({ locale, toggleLocale, theme, toggleTheme}) => {
            return (
                <>
                <h1>
                    <Link to={'/'}>{locale === 'id' ? 'Aplikasi Catatan' : 'Notes App'}</Link>
                    </h1>
                    <nav className="navigation">
                        <ul> 
                            <li><button className="toggle-locale" onClick={toggleLocale}><SiGoogletranslate {...locale === 'id' ? 'en' : 'id'} /></button></li>
                            <li><button className="toggle-theme" onClick={toggleTheme}>{theme === 'light' ? <FiMoon /> : <FiSun />}</button></li>
                        </ul>
                    </nav>
                </>
            )
            }
    }
        </LocaleConsumer>
        )
    }

    return (
        <LocaleConsumer>
        {
            ({ locale, toggleLocale}) => {
        return (
            <>
        <h1>
        <Link to={'/'}>Aplikasi Catatan</Link>
        </h1>
        <nav className="navigation">
            <ul>   
                <li><Link to={'/arsip'}>Arsip</Link></li>
                <li><button className="toggle-locale" onClick={toggleLocale}><SiGoogletranslate {...locale === 'id' ? 'en' : 'id'}/></button></li>
                <li><button className="toggle-theme" onClick={toggleLocale}>{locale === 'light' ? <FiMoon /> : <FiSun />}</button></li>
                <li><button className="button-logout" onClick={logout}><FiLogOut />{name}</button></li> 
            </ul>
        </nav>
        </>
        )
        }
    }
        </LocaleConsumer>
    )
}


Navigation.propTypes = {
    logout: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    authedUser: PropTypes.object
}

export default Navigation;