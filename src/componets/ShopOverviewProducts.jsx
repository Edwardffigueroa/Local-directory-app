import React from 'react';
import './styles/ShopOverviewProducts.scss';
import { Chip } from '@material-ui/core';
import ProductCard from './ProductCard';

function ShopOverviewProducts (){

    const handleClick = () => {
        console.info('You clicked the Chip.');
      };

    return(
        <React.Fragment>
            <section id ="shop-products-container">
                <div className="title-products">
                    <h3>Productos</h3>
                    <p>Ver todos</p>
                </div>
                <div className="category-container">
                        {/* chips */}
                        <Chip label="Categoría" onClick={handleClick} />
                        <Chip label="Categoría" onClick={handleClick} color="secondary" />
                        <Chip label="Categoría Dos" onClick={handleClick} />
                        <Chip label="Categoría" onClick={handleClick} />
                        <Chip label="Categoría" onClick={handleClick} />
                        <Chip label="Categoría" onClick={handleClick} />
                        <Chip label="Categoría" onClick={handleClick} />                    
                </div>
                <div className="products-container">
                        {/* card-component */}
                        <ProductCard />
                        <ProductCard />
                </div>
            </section>
        </React.Fragment>
    );    
}

export default ShopOverviewProducts;