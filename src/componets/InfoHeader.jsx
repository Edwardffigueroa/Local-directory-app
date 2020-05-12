import React from 'react'
import './styles/InfoHeader.scss';
import TopBar from './TopBar';
import ShopName from './ShopName';
import { Divider } from '@material-ui/core';

function InfoHeader() {
    return (
        <React.Fragment>
            <TopBar />
            <div className="info-header-container">
                <ShopName />
            </div>
            <Divider />
        </React.Fragment>
    );
}

export default InfoHeader;