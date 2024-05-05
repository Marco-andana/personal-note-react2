import React from "react";
import PropTypes from "prop-types";

class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: ''
        }

        this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
        this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onTitleChangeHandler(event) {
        this.setState(() => {
            return {
                title: event.target.value
            }
        })
    }

    onBodyChangeHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value
            }
        })
    }

    onSubmitHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state)
    }

    render() {
        return (
            <form className="add-new-page__input" onSubmit={this.onSubmitHandler}>
                <input type="text" value={this.state.title} onChange={this.onTitleChangeHandler} className="add-new-page__input__title" placeholder="Catatan Rahasia" />
                <input type="text" value={this.state.body} onChange={this.onBodyChangeHandler} className="add-new-page__input__body" placeholder="Sebenarnya saya adalah ...."/>
                <button className="add-new-page__action action" type="submit"></button>
            </form>
        )
    }
}

NoteInput.propTypes = {
    addNote: PropTypes.func.isRequired
}

export default NoteInput;