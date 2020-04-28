import React from 'react'
import CategoryItem from './CategoryItem'
import '../componets/styles/MainCategories.scss'


function MainCategories (){
    return (
        <section id="categories-container">
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
        </section>
        
    );
}

export default MainCategories;