import React from "react";
import NoteItemBody from "./NoteItemBody";

const NoteItem = ({id, title, body, createdAt}) => {
    return (
            <NoteItemBody id={id} title={title} body={body} createdAt={createdAt} />
    )
}

export default NoteItem;