import React from 'react';
import './styles/OpeningHours.scss';
import Image from "../resources/img/hour.svg";
import { Paper } from '@material-ui/core';

function OpeningHours() {
    return (
        <div className="opening-hours-container">
            <img src={Image} alt="" />
            <Paper className="table-card">
                <p className="text-hours"><span>Lun.</span> 8:00am - 6:00pm</p>
                <p className="text-hours"><span>Mar.</span> 8:00am - 6:00pm</p>
                <p className="text-hours"><span>Mie.</span> 8:00am - 6:00pm</p>
                <p className="text-hours"><span>Jue.</span> 8:00am - 6:00pm</p>
                <p className="text-hours"><span>Vie.</span> 8:00am - 6:00pm</p>
                <p className="text-hours"><span>Sáb.</span> 8:00am - 6:00pm</p>
                <p className="text-hours"><span>Dom.</span> Cerrado</p>
            </Paper>
        </div>
    );
}

export default OpeningHours;