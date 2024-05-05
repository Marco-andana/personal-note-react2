import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FiTrash } from "react-icons/fi";
import { RiInboxArchiveFill, RiInboxUnarchiveFill } from "react-icons/ri";

function NoteDetailAction({ id, onDelete, onArchive, onUnArchive, archived }) {
    return (
        <div className="detail-page__action">
        {archived ? (
            <Link to='/' className="action" onClick={() => onUnArchive(id)}><RiInboxUnarchiveFill /></Link>
        ) : (
            <Link to='/' className="action" onClick={() => onArchive(id)}><RiInboxArchiveFill /></Link>
        )}
            <Link to='/' className="action" onClick={() => onDelete(id)}><FiTrash /></Link>
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