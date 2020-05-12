import React from 'react'
import InfoHeader from '../componets/InfoHeader';
import OpeningHours from '../componets/OpeningHours';
import InfoBody from '../componets/InfoBody';
import ShopPhones from '../componets/ShopPhones';

const ShopContactContainer = () => {
    return (
        <React.Fragment>
            <InfoHeader />
            <InfoBody >
                <OpeningHours />
                <ShopPhones />
            </InfoBody>
        </React.Fragment>
    );
}

export default ShopContactContainer;