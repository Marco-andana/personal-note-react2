import React, {useState, useMemo, useEffect} from "react";
import { Route, Routes, useNavigate } from 'react-router-dom'
import Navigation from "./Navigation";
import HomePage from "../pages/HomePage";
import AddPage from "../pages/AddPage";
import DetailPage from "../pages/DetailPage";
import ArchivePage from "../pages/ArchivePage"
import NotFoundPage from "../pages/NotFoundPage";
import LoginPage from "../pages/LoginPage";
import { getUserLogged, putAccessToken } from "../utils/network-data";
import { LocaleProvider } from "../contexts/LocaleContext";
import { ThemeProvider } from "../contexts/ThemeContext";
import RegisterPage from "../pages/RegisterPage";

function NoteApp() {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')
    const [locale, setLocale] = useState(localStorage.getItem('locale') || 'id')
    const [authedUser, setAuthedUser] = useState(null)
    const [initializing, setInitializing] = useState(true);
    const navigate = useNavigate();

    const toggleTheme = () => {
        setTheme((prevTheme) => {
            const newTheme = prevTheme === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', newTheme);
            return newTheme;
        })
    }

    const themeContext = useMemo(() => {
        return {
            theme,
            toggleTheme
        }
    }, [theme])

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    })

    const toggleLocale = () => {
        setLocale((prevLocale) => {
            const newLocale = prevLocale === 'id' ? 'en' : 'id';
            localStorage.setItem('locale', newLocale);
            return newLocale;
        })
    }

    const localeContext = useMemo(() => {
        return {
            locale,
            toggleLocale
        }
    }, [locale])

    const fetchData = async () => {
        const { data } = await getUserLogged();
        setAuthedUser(data);
      };

    useEffect(() => {
        fetchData().then(() => {
          setInitializing(false);
        });
      }, []);

    async function onLoginSuccess({ accessToken }) {
        putAccessToken(accessToken);
        fetchData();
        navigate('/')
    }

    function onLogout() {
        setAuthedUser(null);
        putAccessToken('')
        navigate('/')
    }

    if(initializing) return null

        if(authedUser === null) {
            return (
                <ThemeProvider value={themeContext}>
                <LocaleProvider value={localeContext}>
                    <div className="app-container" data-theme={theme}>
                        <header>
                            <Navigation logout={onLogout} authedUser={authedUser} name={''} />
                        </header>
                        <main>
                            <Routes>
                                <Route path="/*" element={<LoginPage loginSuccess={onLoginSuccess}/>} />
                                <Route path="/register" element={<RegisterPage />} />
                            </Routes>
                        </main>
                    </div>
                    </LocaleProvider>
                </ThemeProvider>
            )
        }
 
    return (
        <ThemeProvider value={themeContext}>
        <LocaleProvider value={localeContext}>
        <div className="app-container" data-theme={theme}>
            <header>
                <Navigation logout={onLogout} name={authedUser.name} />
            </header>
                <main>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/add" element={<AddPage />} />
                        <Route path="/notes/:id" element={<DetailPage />} />
                        <Route path="/arsip" element={<ArchivePage />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </main>
        </div>
        </LocaleProvider>
        </ThemeProvider>
    )
}

export default NoteApp;