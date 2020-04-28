import React from 'react'

import HomeHeader from '../componets/HomeHeader'
import SearchHome from '../componets/SearchHome';
import MainCategories from '../componets/MainCategories';
import SectionRow from '../componets/SectionRow';

const HomeContainer = () =>{

    return(
    <React.Fragment>
        <HomeHeader />
        <SearchHome />
        <MainCategories />
        <SectionRow />
        <SectionRow />
    </React.Fragment>
    );
}

export default HomeContainer;

