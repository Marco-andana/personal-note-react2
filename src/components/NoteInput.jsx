import React from "react";
import PropTypes from "prop-types";

function NoteInput({ addNote }) {
    const [title, setTitle] = React.useState('');
    const [body, setBody] = React.useState('');

    const onTitleChangeHandler = (event) => {
        setTitle(event.target.value);
    }

    const onBodyChangeHandler = (event) => {
        setBody(event.target.value);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        addNote({
            title: title,
            body: body
        });
        setTitle('');
        setBody('');
    }

        return (
            <form className="add-new-page__input" onSubmit={onSubmitHandler}>
                <input 
                    type="text" 
                    value={title} 
                    onChange={onTitleChangeHandler} 
                    className="add-new-page__input__title" 
                    placeholder="Catatan Rahasia" />
                <input 
                    type="text" 
                    value={body} 
                    onChange={onBodyChangeHandler} 
                    className="add-new-page__input__body" 
                    placeholder="Sebenarnya saya adalah ...."/>
                <button 
                    className="add-new-page__action action" 
                    type="submit"></button>
            </form>
        )
    }


NoteInput.propTypes = {
    addNote: PropTypes.func.isRequired
}

export default NoteInput;