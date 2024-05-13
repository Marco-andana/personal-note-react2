import React from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { FiTrash } from "react-icons/fi";
import { RiInboxArchiveFill, RiInboxUnarchiveFill } from "react-icons/ri";
import { deleteNote, archiveNote, unarchiveNote, getNote } from "../utils/network-data";

function NoteDetailAction({ id }) {
    const navigate = useNavigate();
    const [notes, setNotes] = React.useState([]);

    React.useEffect(() => {
        getNote(id).then(({ data }) => {
            setNotes(data)
        })
    }, [])

    async function onDeleteHandler(id) {
        if(notes.archived) {
            await deleteNote(id);
            navigate('/arsip');
        } else {
            await deleteNote(id);
            navigate('/');
        }
    }

    async function onArchiveHandler(id) {
        if(notes.archived) {
            await unarchiveNote(id);
            navigate('/arsip');
        } else {
            await archiveNote(id);
            navigate('/');
        }
    }

    const { archived } = notes;

    return (
        <div className="detail-page__action">
        {archived ? (
            <button className="action" onClick={() => onArchiveHandler(id)}><RiInboxUnarchiveFill /></button>
        ) : (
            <button className="action" onClick={() => onArchiveHandler(id)}><RiInboxArchiveFill /></button>
        )}
            <button className="action" onClick={() => onDeleteHandler(id)}><FiTrash /></button>
        </div>
    )
}

NoteDetailAction.propTypes = {
    id: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    onArchive: PropTypes.func.isRequired,
    onUnArchive: PropTypes.func.isRequired,
    archived: PropTypes.bool.isRequired,
}

export default NoteDetailAction;