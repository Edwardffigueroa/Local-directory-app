import React from 'react';
import Image from '../resources/img/coverphoto.jpg';
import TopBar from '../componets/TopBar';
import './styles/CoverPhoto.scss';

 const CoverPhoto = () =>{
    return(
    <React.Fragment>
        
        <div className="coverPhoto">        
            <img src={Image} alt=""/>        
        </div>
        <TopBar />
    </React.Fragment>
    );
}

export default CoverPhoto