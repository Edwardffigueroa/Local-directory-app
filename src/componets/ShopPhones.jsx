import React from 'react';
import './styles/ShopPhones.scss';
import Image from "../resources/img/cart.svg";
import { Paper } from '@material-ui/core';

function ShopPhones() {
    return (
        <div className="shop-phones-container">
            <img src={Image} alt="" />
            <Paper className="table-card">
                hola
            </Paper>
        </div>
    );
}

export default ShopPhones;