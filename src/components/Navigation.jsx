import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FiSun, FiMoon, FiLogOut } from "react-icons/fi";
import { SiGoogletranslate } from "react-icons/si";
import { LocaleConsumer } from "../contexts/LocaleContext";

function Navigation({logout, name, authedUser}) {
    if(authedUser === null) {
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
                <li><button className="toggle-locale" onClick={toggleLocale}><SiGoogletranslate {...locale === 'id' ? 'en' : 'id'}/></button></li>
                <li><button className="toggle-theme" onClick={toggleLocale}>{}</button></li>
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
                <li><button className="toggle-theme" onClick={toggleLocale}>{}</button></li>
                <li><button onClick={logout}><FiLogOut />{name}</button></li> 
            </ul>
        </nav>
        </>
        )
        }
    }
        </LocaleConsumer>
    )
}

export default Navigation;