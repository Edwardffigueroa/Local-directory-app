import React from 'react';
import './styles/OpeningHours.scss';
import Image from "../resources/img/hour.svg";
import { Paper } from '@material-ui/core';

function OpeningHours() {
    return (
        <div className="opening-hours-container">
            <img src={Image} alt="" />
            <Paper className="table-card">
                <p className="text-hours"><span>Lunes</span> 8:00am - 6:00pm</p>
                <p className="text-hours"><span>Martes</span> 8:00am - 6:00pm</p>
                <p className="text-hours"><span>Miercoles</span> 8:00am - 6:00pm</p>
                <p className="text-hours"><span>Jueves</span> 8:00am - 6:00pm</p>
                <p className="text-hours"><span>Viernes</span> 8:00am - 6:00pm</p>
                <p className="text-hours"><span>Sábado</span> 8:00am - 6:00pm</p>
                <p className="text-hours"><span>Domingo</span> Cerrado</p>
            </Paper>
        </div>
    );
}

export default OpeningHours;