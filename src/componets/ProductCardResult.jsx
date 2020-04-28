import React from 'react'
import { Paper } from '@material-ui/core';
import './styles/ProductCardResult.scss'
import { Star, LocationOn } from '@material-ui/icons';
import Comercio from '../resources/img/example.png';
//https://css-tricks.com/clipping-masking-css/

function ProductCardResult(){

    return(
        <Paper className="resultCard">
            <div className="image-product"> 
                <img src={Comercio} alt=""/>
             </div>
            <div className="info-product-containter">

                <div className="info-product-header">
                    <p className="title-product">Nombre del producto </p>
                </div>

                <div className="info-product-body">
                <p className="category-product">$12.000</p>
                <p className="delivery-indicator-product">Domicilios</p>
                </div>

                <div className="info-product-footer">
                <p className="location-product">Supermercado Caribe SAS </p>
                
                </div>

            </div>

        </Paper>
    );

}

export default ProductCardResult;