import React from "react";
import { useSearchParams } from "react-router-dom";
import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";
import { getActiveNotes, getNote } from "../utils/network-data";
import NoteAdd from "../components/NoteAdd";
import PropTypes from 'prop-types';
import LocaleContext from "../contexts/LocaleContext";

function HomePage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [notes, setNotes] = React.useState([]);
    const [keyword, setKeyword] = React.useState(() => {
        return searchParams.get('keyword') || ''
    });
    const [loading, setLoading] = React.useState(true);
    const { locale } = React.useContext(LocaleContext);

    React.useEffect(() => {
        getActiveNotes().then(({ data }) => {
            setLoading(false);
            setNotes(data);
        });
    }, []);

    function onKeywordChangeHandler(keyword) {
        setKeyword(keyword);
        setSearchParams({ keyword });
    }

    const filteredNotes = notes.filter((note) => {
        return note.title.toLowerCase().includes(
            keyword.toLowerCase()
        )
    })

    return (
        <section className="homepage">
        <h2>{locale === 'id' ? 'Catatan Aktif' : 'Active Notes'}</h2>
        <section className="search-bar">
        <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
        </section>
        {
        loading ? (
        <p>(locale === 'id' ? 'Memuat catatan...' : 'Loading notes...')</p> 
        ) : (
        <NoteList notes={filteredNotes} />
        )
        }
        <NoteAdd />
        </section>
    )
}

HomePage.propTypes = {
    defaultKeyword: PropTypes.string,
    keywordChange: PropTypes.func
};

export default HomePage;