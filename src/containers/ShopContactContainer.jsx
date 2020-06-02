import React from 'react'
import InfoHeader from '../componets/InfoHeader';
import OpeningHours from '../componets/OpeningHours';
import InfoBody from '../componets/InfoBody';
import ShopPhones from '../componets/ShopPhones';
import ShopLocation from '../componets/ShopLocation';
import SocialNetwork from '../componets/SocialNetwork';

const ShopContactContainer = () => {
    return (
        <React.Fragment>
            <InfoHeader />
            <InfoBody >
                <OpeningHours />
                <ShopPhones />
                <ShopLocation />
                <SocialNetwork />
            </InfoBody>
        </React.Fragment>
    );
}

export default ShopContactContainer;