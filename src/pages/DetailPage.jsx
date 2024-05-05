import React from "react";
import { useParams } from "react-router-dom";
import NoteDetail from "../components/NoteDetail";
import { getNote, getAllNotes, deleteNote, archiveNote, unarchiveNote } from "../utils/local-data";
import NoteDetailAction from "../components/NoteDetailAction";
import PropTypes from 'prop-types';

function DetailPageWrapper() {
    const { id } = useParams();
    return <DetailPage id={id} />
}

DetailPageWrapper.propTypes = {
    id: PropTypes.string
}

class DetailPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            note: getNote(props.id)
        }

        
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onUnArchiveHandler = this.onUnArchiveHandler.bind(this);
    }

    onDeleteHandler(id) {
        deleteNote(id);

        this.setState(() => {
            return {
                notes: getAllNotes()
            }
        })
    }

    onArchiveHandler(id) {
        archiveNote(id);

        this.setState(() => {
            return {
                notes: getAllNotes()
            }
        })
    }

    onUnArchiveHandler(id) {
        unarchiveNote(id);

        this.setState(() => {
            return {
                notes: getAllNotes()
            }
        })
    }

    render() {
        if(this.state.note === null) {
            return (
                <p>Note is not found!</p>
            )
        }

        const { archived } = this.state.note;

        return (
            <section>
                <NoteDetail {...this.state.note} />
                <NoteDetailAction id={this.props.id} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} onUnArchive={this.onUnArchiveHandler} archived={archived} />
            </section>
        )
    }
}

export default DetailPageWrapper;