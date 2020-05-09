import React from 'react';
import './styles/ShopName.scss';
import Image from '../resources/img/example.png';

function ShopName() {
    return (
        <div className="shop-name">
            <div className="image-circle">
                <img src={Image} alt="" />
            </div>
            <div className="shop-text-container">
                <h2 className="shop-title" >Bodegón</h2>
                <p className="shop-category">Supermercado</p>
            </div>
        </div>
    );
}

export default ShopName;