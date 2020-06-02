import React from 'react';
import './styles/ShopPhones.scss';
import Image from "../resources/img/cart.svg";
import PhoneImage from "../resources/img/phone.svg"
import { Paper } from '@material-ui/core';

function ShopPhones() {
    return (
        <div className="shop-phones-container">
            <img src={Image} alt="" />
            <Paper className="table-card">

                <div className="phone-item">
                    <img className="phone-item-icon" src={PhoneImage} alt="" />
                    <p>553 0854</p>
                </div>
                <div className="phone-item">
                    <img className="phone-item-icon" src={PhoneImage} alt="" />
                    <p>301 553 0854</p>
                </div>
                <div className="phone-item">
                    <img className="phone-item-icon" src={PhoneImage} alt="" />
                    <p>301 553 0854</p>
                </div>

            </Paper>
        </div>
    );
}

export default ShopPhones;