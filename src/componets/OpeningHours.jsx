import React from 'react';
import './styles/OpeningHours.scss';
import Image from "../resources/img/hour.svg";
import { Paper } from '@material-ui/core';

function OpeningHours() {
    return (
        <div className="opening-hours-container">
            <img src={Image} alt="" />
            <Paper className="table-card">
                hola
            </Paper>
        </div>
    );
}

export default OpeningHours;