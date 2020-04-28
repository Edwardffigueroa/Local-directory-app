import React from 'react';
import Image from '../resources/img/coverphoto.jpg';
import './styles/CoverPhoto.scss';

 const CoverPhoto = () =>{
    return(
    <div className="coverPhoto">
        <img src={Image} alt=""/>
    </div>
    );
}

export default CoverPhoto;