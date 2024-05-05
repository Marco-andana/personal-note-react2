import React from "react";
import { addNote } from "../utils/local-data";
import NoteInput from "../components/NoteInput";
import { useNavigate } from "react-router-dom";

function AddPage() {
    const navigate = useNavigate();

    function onAddNoteHandler(event) {
        addNote(event);
        navigate('/')
    }

    return (
        <NoteInput addNote={onAddNoteHandler} />
    )
}

export default AddPage;