import React from 'react';
import CoverPhoto from '../componets/CoverPhoto';
import ShopOverviewHeader from '../componets/ShopOverviewHeader';

const ShopOverview = () =>{
    return(
        <React.Fragment>            
            <CoverPhoto />
            <ShopOverviewHeader />            
        </React.Fragment>
    );
}

export default ShopOverview;