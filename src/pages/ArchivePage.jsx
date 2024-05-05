import React from "react";
import { useSearchParams } from "react-router-dom";
import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";
import { getAllNotes, getArchivedNotes } from "../utils/local-data";
import PropTypes from 'prop-types';

function ArchivePageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();

    const keyword = searchParams.get('keyword')

    function changeSearchParams(keyword) {
        setSearchParams({ keyword });
    }

    return <ArchivePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
}

ArchivePageWrapper.propTypes = {
    defaultKeyword: PropTypes.string,
    keywordChange: PropTypes.func
}

class ArchivePage extends React.Component {
    constructor(props) {
        super(props);

        this.state= {
            notes: getAllNotes(),
            keyword: props.defaultKeyword || ''
        }

        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    }

    onKeywordChangeHandler(keyword) {
        this.setState(() => {
            return {
                keyword,
            }
        })

        this.props.keywordChange(keyword)
    }

    render() {
        const notes = this.state.notes.filter((note) => {
            return note.title.toLowerCase().includes(
                this.state.keyword.toLowerCase()
            )
        })

        return (
            <section className="homepage">
            <h2>Catatan Aktif</h2>
            <section className="search-bar">
            <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
            </section>
            <NoteList notes={notes.filter((note) => note.archived === true)} />
            </section>
        )
    }
}

ArchivePage.propTypes = {
    defaultKeyword: PropTypes.string,
    keywordChange: PropTypes.func
};

export default ArchivePageWrapper;