import React from 'react';
import './styles/HomeHeader.scss'

import UserIcon from '../resources/img/user-icon.svg';
import { ArrowDropDown } from '@material-ui/icons';

function HomeHeader() {

  return (
      <header>
       <img src={UserIcon} alt="User"/>
        <div className="text-container">
          <h1>Hey Hola! </h1>
           <p>Ingresa tu ubicación  <ArrowDropDown /></p>
       </div>
      </header>
  );
}

export default HomeHeader;
