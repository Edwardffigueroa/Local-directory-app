import React from 'react';
import CoverPhoto from '../componets/CoverPhoto';
import ShopOverviewHeader from '../componets/ShopOverviewHeader';
import ShopOverviewProducts from '../componets/ShopOverviewProducts';

const ShopOverview = () =>{
    return(
        <React.Fragment>            
            <CoverPhoto />
            <ShopOverviewHeader />
            <ShopOverviewProducts />
        </React.Fragment>
    );
}

export default ShopOverview;