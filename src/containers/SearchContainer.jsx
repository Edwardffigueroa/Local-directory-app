import React from 'react'
import TopBar from '../componets/TopBar'
import SearchBar from '../componets/SearchBar'
import ResultSearch from '../componets/ResultSearch'

const SearchContainer = ()=> {
    return(
        <React.Fragment>
            <TopBar />
            <SearchBar />
            <ResultSearch />
        </React.Fragment>
    );
}

export default SearchContainer;