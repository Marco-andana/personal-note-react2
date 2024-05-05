import React from "react";
import { Link } from "react-router-dom";

function NoteDetailAction({ id, onDelete, onArchive, onUnArchive }) {
    return (
        <div className="detail-page__action">
            <Link to='/' className="action" onClick={() => onArchive(id)}>a</Link>
            <Link to='/' className="action" onClick={() => onDelete(id)}>x</Link>
        </div>
    )
}

export default NoteDetailAction;