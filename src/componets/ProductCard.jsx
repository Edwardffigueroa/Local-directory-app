import React from 'react';
import './styles/ProductCard.scss';
import { Paper } from '@material-ui/core';

function ProductCard (){
    return(
        <Paper className="product-card-container">
            <div className="product-image-container"></div>
            <p className="product-price">$15.000</p>
            <p className="product-name">Nombre de producto Xd</p>
            <p className="product-cuanti">30 und ($553/und)</p>
        </Paper>
    );
}

export default ProductCard;