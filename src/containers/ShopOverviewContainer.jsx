import React from 'react';
import CoverPhoto from '../componets/CoverPhoto';
import ShopOverviewHeader from '../componets/ShopOverviewHeader';
import ShopOverviewProducts from '../componets/ShopOverviewProducts';
import BottomButton from '../componets/BottomButton';

const ShopOverview = () =>{
    return(
        <React.Fragment>            
            <CoverPhoto />
            <ShopOverviewHeader />
            <ShopOverviewProducts />
            <BottomButton />
        </React.Fragment>
    );
}

export default ShopOverview;