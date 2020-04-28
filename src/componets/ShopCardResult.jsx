import React from 'react'
import { Paper } from '@material-ui/core';
import './styles/ShopCardResult.scss'
import { Star, LocationOn } from '@material-ui/icons';
import Comercio from '../resources/img/example.png';
//https://css-tricks.com/clipping-masking-css/

function ShopCardResult(){

    return(
        <Paper className="resultCard">
            <div className="image-shop"> 
                <img src={Comercio} alt=""/>
             </div>
            <div className="info-shop-containter">

                <div className="info-shop-header">
                    <p className="title-shop">Nombre de comercio de la </p>
                    <p className="score-shop"> <Star fontSize='small' /> 5</p>
                </div>
                
                <p className="category-shop">Category shop</p>
                
                <div className="info-shop-footer">
                <p className="location-shop"> <LocationOn fontSize='small' /> Calle V huala </p>
                <p className="delivery-indicator-shop">Domicilios</p>
                </div>

            </div>

        </Paper>
    );

}

export default ShopCardResult;