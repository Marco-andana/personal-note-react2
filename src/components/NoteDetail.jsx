import React from "react";
import PropTypes from "prop-types";
import { showFormattedDate } from "../utils";

function NoteDetail({ title, createdAt, body }) {
    return (
        <div>
            <h3>{title}</h3>
            <p className='note-item__createdAt'>{showFormattedDate(createdAt)}</p>
            <p className='note-item__body'>{body}</p>
        </div>
    )
}

NoteDetail.propTypes = {
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
}

export default NoteDetail;