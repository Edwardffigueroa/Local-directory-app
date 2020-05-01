import React from 'react';
import './styles/ShopOverviewProducts.scss';
import { Chip, Divider } from '@material-ui/core';
import ProductCard from './ProductCard';

function ShopOverviewProducts (){

    const handleClick = () => {
        console.info('You clicked the Chip.');
      };

    return(
        <React.Fragment>
            <section id ="shop-products-container">
                <div className="title-products">
                    <h3>Categorías</h3>
                    <p>Buscar en la tienda </p>
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
                <Divider />
                <div className="title-products">                    
                    <p>Categoría</p>                    
                </div>
                <div className="products-container">
                        {/* card-component */}
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                </div>
            </section>
        </React.Fragment>
    );    
}

export default ShopOverviewProducts;