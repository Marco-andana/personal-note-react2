import React from "react";
import { Route, Routes } from 'react-router-dom'
import Navigation from "./Navigation";
import HomePage from "../pages/HomePage";
import AddPage from "../pages/AddPage";
import DetailPage from "../pages/DetailPage";
import ArchivePage from "../pages/ArchivePage"
import NotFoundPage from "../pages/NotFoundPage";
import LoginPage from "../pages/LoginPage";
import { getUserLogged, putAccessToken } from "../utils/network-data";
import { LocaleProvider } from "../contexts/LocaleContext";
import RegisterPage from "../pages/RegisterPage";

class NoteApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            authedUser: null,
            initializing: true,
            localeContext: {
                locale: localStorage.getItem('locale') || 'id',
                toggleLocale: () => {
                    this.setState((prevState) => {
                        const newLocale = prevState.localeContext.locale === 'id' ? 'en' : 'id';
                        localStorage.setItem('locale', newLocale);
                        return {
                            localeContext: {
                                ...prevState.localeContext,
                                locale: newLocale
                            }
                        }
                    })
                }
            }
        }

        this.onLoginSuccess = this.onLoginSuccess.bind(this);
        this.onLogout = this.onLogout.bind(this);
    }

    async componentDidMount() {
        const { data } = await getUserLogged();

        this.setState({
            authedUser: data,
            initializing: false
        })
    }

    async onLoginSuccess({ accessToken }) {
        putAccessToken(accessToken);
        const { data } = await getUserLogged();

        this.setState({
            authedUser: data
        })
    }

    onLogout() {
        this.setState(() => {
            return {
            authedUser: null
            }
        })
        putAccessToken('')
    }

    render() {
        if(this.state.initializing) {
            return null;
        }

        if(this.state.authedUser === null) {
            return (
                <LocaleProvider value={this.state.localeContext}>
                    <div className="app-container">
                        <header>
                            <Navigation authedUser={this.state.authedUser} />
                        </header>
                        <main>
                            <Routes>
                                <Route path="/*" element={<LoginPage loginSuccess={this.onLoginSuccess}/>} />
                                <Route path="/register" element={<RegisterPage />} />
                            </Routes>
                        </main>
                    </div>
                </LocaleProvider>
            )
        }
 
    return (
        <LocaleProvider value={this.state.localeContext}>
        <div className="app-container">
            <header>
                <Navigation />
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
    )
}
}

export default NoteApp;