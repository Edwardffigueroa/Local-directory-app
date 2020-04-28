import React from 'react';
import './styles/SearchHome.scss'
import { Search } from '@material-ui/icons';


function SearchHome(){

    return (
        <section id="search-home-container">
        <div className="searchBar">
            <span> <Search /></span>
            <p>Busca Lo que quieras...</p>            
        </div>
        </section>
    );

}

export default SearchHome;