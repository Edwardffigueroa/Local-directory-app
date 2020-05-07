import React from 'react';
import CoverPhoto from '../componets/CoverPhoto';
import ShopOverviewHeader from '../componets/ShopOverviewHeader';
import ShopOverviewProducts from '../componets/ShopOverviewProducts';
import BottomButton from '../componets/BottomButton';
import UpFab from '../componets/UpFab';

const ShopOverview = () =>{
    return(
        <React.Fragment>            
            <CoverPhoto />
            <ShopOverviewHeader />
            <ShopOverviewProducts />            
            <BottomButton />
            <UpFab />
        </React.Fragment>
    );
}

export default ShopOverview;