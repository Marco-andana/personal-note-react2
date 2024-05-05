import React from "react";
import PropTypes from "prop-types";
import NoteItemBody from "./NoteItemBody";

const NoteItem = ({id, title, body, createdAt}) => {
    return (
            <NoteItemBody id={id} title={title} body={body} createdAt={createdAt} />
    )
}

NoteItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
}

export default NoteItem;