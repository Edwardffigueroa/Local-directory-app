import React from 'react'
import './styles/InfoHeader.scss';
import TopBar from './TopBar';
import ShopName from './ShopName';
import { Divider } from '@material-ui/core';

function InfoHeader() {
    return (
        <div className="info-header-container">
            <TopBar />
            <ShopName />
            <Divider />
        </div>
    );
}

export default InfoHeader;