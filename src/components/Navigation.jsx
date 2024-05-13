import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FiSun, FiMoon, FiLogOut } from "react-icons/fi";
import { SiGoogletranslate } from "react-icons/si";
import LocaleContext, { LocaleConsumer } from "../contexts/LocaleContext";
import ThemeContext, { ThemeConsumer } from "../contexts/ThemeContext";

function Navigation({ logout, name, authedUser }) {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => (
        <LocaleConsumer>
          {({ locale, toggleLocale }) => (
            <>
              <h1>
                <Link to={'/'}>{locale === 'id' ? 'Aplikasi Catatan' : 'Notes App'}</Link>
              </h1>
              <nav className="navigation">
                <ul>
                  {authedUser === null ? (
                    <>
                      <li><button className="toggle-locale" onClick={toggleLocale}><SiGoogletranslate {...locale === 'id' ? 'en' : 'id'} /></button></li>
                      <li><button className="toggle-theme" onClick={toggleTheme}>{theme === 'light' ? <FiMoon /> : <FiSun />}</button></li>
                    </>
                  ) : (
                    <>
                      <li><Link to={'/arsip'}>Arsip</Link></li>
                      <li><button className="toggle-locale" onClick={toggleLocale}><SiGoogletranslate {...locale === 'id' ? 'en' : 'id'} /></button></li>
                      <li><button className="toggle-theme" onClick={toggleTheme}>{theme === 'light' ? <FiMoon /> : <FiSun />}</button></li>
                      <li><button className="button-logout" onClick={logout}><FiLogOut /> {name}</button></li>
                    </>
                  )}
                </ul>
              </nav>
            </>
          )}
        </LocaleConsumer>
      )}
    </ThemeConsumer>
  );
}


Navigation.propTypes = {
    logout: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    authedUser: PropTypes.object
}

export default Navigation;