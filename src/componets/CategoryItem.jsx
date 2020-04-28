import React from 'react'
import CategoryImage from '../resources/img/categories/burger.svg'
import '../componets/styles/CategoryItem.scss'

function CategoryItem (){
    return (
        <div id="category-item-container">
            <div className="icon-square"><img src={CategoryImage} alt=""/></div>
            <p>Category</p>
        </div>        
    );
}

export default CategoryItem;