import React from "react";
import NoteItem from "./NoteItem";
import PropTypes from 'prop-types';

function NoteList({notes}) {
    return (
        <div className="notes-list">
        { notes.length === 0 ? (
            <p className='notes-list__empty-message'>Tidak ada catatan.</p>
          ) : (
                notes.map((note) => (
                    <NoteItem
                    key={note.id}
                    id={note.id}
                    createdAt={note.createdAt}
                    {...note} />
                ))
          )}
            </div>
    )
}

NoteList.propTypes = {
    notes: PropTypes.array
}


export default NoteList;