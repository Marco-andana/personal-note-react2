import React from "react";
import { Route, Routes } from 'react-router-dom'
import Navigation from "./Navigation";
import SearchBar from "./SearchBar";
import HomePage from "../pages/HomePage";
import AddPage from "../pages/AddPage";
import DetailPage from "../pages/DetailPage";
import ArchivePage from "../pages/ArchivePage"

function NoteApp() {
    return (
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
                    </Routes>
                </main>
        </div>
    )
}

export default NoteApp;