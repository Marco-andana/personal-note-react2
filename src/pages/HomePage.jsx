import React from "react";
import { useSearchParams } from "react-router-dom";
import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";
import { getActiveNotes, getNote } from "../utils/local-data";
import NoteAdd from "../components/NoteAdd";
import PropTypes from 'prop-types';
import LocaleContext from "../contexts/LocaleContext";

function HomePage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [notes, setNotes] = React.useState([]);
    const [keyword, setKeyword] = React.useState(() => {
        return searchParams.get('keyword') || ''
    });

    const { locale } = React.useContext(LocaleContext);

    React.useEffect(() => {
        getActiveNotes().then(({ data }) => {
            setNotes(data);
        })
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
        <h2>Catatan Aktif</h2>
        <section className="search-bar">
        <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
        </section>
        <NoteList notes={notes.filter((note) => note.archived === false)} />
        <NoteAdd />
        </section>
    )

}

// function HomePageWrapper() {
//     const [searchParams, setSearchParams] = useSearchParams();

//     const keyword = searchParams.get('keyword')

//     function changeSearchParams(keyword) {
//         setSearchParams({ title: keyword });
//     }

//     return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
// }

// class HomePage extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state= {
//             notes: getAllNotes(),
//             keyword: props.defaultKeyword || ''
//         }

//         this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
//     }

//     onKeywordChangeHandler(keyword) {
//         this.setState(() => {
//             return {
//                 keyword,
//             }
//         })

//         this.props.keywordChange(keyword)
//     }

//     render() {
//         const notes = this.state.notes.filter((note) => {
//             return note.title.toLowerCase().includes(
//                 this.state.keyword.toLowerCase()
//             )
//         })

//         return (
//             <section className="homepage">
//             <h2>Catatan Aktif</h2>
//             <section className="search-bar">
//             <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
//             </section>
//             <NoteList notes={notes.filter((note) => note.archived === false)} />
//             <NoteAdd />
//             </section>
//         )
//     }
// }

HomePage.propTypes = {
    defaultKeyword: PropTypes.string,
    keywordChange: PropTypes.func
};

export default HomePage;