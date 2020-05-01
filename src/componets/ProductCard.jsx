import React from 'react';
import './styles/ProductCard.scss';
import { Paper } from '@material-ui/core';
import Image from '../resources/img/example.png'

function ProductCard (){
    return(
        <Paper className="product-card-container">
            <div className="product-image-container">
                <img src={Image} alt=""/>
            </div>

            <p className="product-price">$15.000</p>
            <p className="product-name">Nombre de producto como sea</p>
            <p className="product-quantity">30 und ($553/und)</p>
        </Paper>
    );
}

export default ProductCard;