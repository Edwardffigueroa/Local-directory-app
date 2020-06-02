import React from 'react';
import './styles/ShopLocation.scss';
import { Paper } from '@material-ui/core';
import IconLocation from "../resources/img/location.svg"

function ShopLocation() {
    return (
        <Paper className="shop-location-container">
            <img src={IconLocation} alt="" />
            <div className="letterAddress">
                <p className="letter">Carrera 24 # 25 -22</p>
                <p className="city">Colombia, Valle del cauca, Cali</p>
            </div>
        </Paper>
    );
}

export default ShopLocation;