import React from "react";
import { useParams } from "react-router-dom";
import NoteDetail from "../components/NoteDetail";
import NotFoundPage from "./NotFoundPage";
import { getNote } from "../utils/network-data";
import NoteDetailAction from "../components/NoteDetailAction";
import PropTypes from 'prop-types';

function DetailPage() {
    const { id } = useParams();
    const [notes, setNotes] = React.useState();

    React.useEffect(() => {
        getNote(id).then(({ data }) => {
            setNotes(data);
        })
    },[])
    
        if(!notes) return <NotFoundPage />

        const { archived } = notes;

        return (
            <section>
                <NoteDetail {...notes} />
                <NoteDetailAction id={id} />
            </section>
        )
    }

DetailPage.propTypes = {
    id: PropTypes.string
}

export default DetailPage;