import React from 'react'
import './styles/SearchBar.scss'
import { InputAdornment, InputBase, Button } from '@material-ui/core'
import { SearchOutlined, FilterList } from '@material-ui/icons';

function SearchBar(){
    return(
        <div className="search-bar-container">

             <InputBase
             type='search'
             aria-label='Search'
             variant='filled'
             margin= 'dense'
             autoFocus = {true}
             placeholder='Busca lo que quieras'
             startAdornment = {
                   <InputAdornment position="start">
                        <SearchOutlined />
                    </InputAdornment>}
             />

             <Button>
                 <FilterList />
             </Button>

        </div>
    );
    
}

export default SearchBar;