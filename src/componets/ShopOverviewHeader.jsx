import React from 'react';
import './styles/ShopOverviewHeader.scss';
import Image from '../resources/img/example.png';
import { Star } from '@material-ui/icons';
import { Divider } from '@material-ui/core';

function ShopOverviewHeader () {
    return (
        <React.Fragment>
            <section id="shop-header">
                <div className="shop-name">
                    <div className="image-circle">
                        <img src={Image} alt=""/>
                    </div>
                    <div className="shop-text-container">
                        <h2 className="shop-title" >Bodegón</h2>
                        <p className="shop-category">Supermercado</p>
                    </div>
                </div>

            <p className="score-shop"> <Star fontSize='small' /> 5</p>            
            </section>
            <div className="aditional-info-container">
                <p className="chip delivery">Domicilios</p>
                <p className="chip opened">Abierto ahora</p>
            </div>
            <Divider />
        </React.Fragment>
    );
}

export default ShopOverviewHeader;