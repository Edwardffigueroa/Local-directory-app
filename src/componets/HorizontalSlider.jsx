import React from 'react';
import Bodegon from '../resources/img/categories/bodegon.svg'
import './styles/HorizontalSlider.scss'
import { Paper } from '@material-ui/core';


function HorizontalSlider() {

  return (
     <div className="horizontal-slider-container">
         
        <Paper>
        <img src={Bodegon} alt=""/>   
        </Paper>
        <Paper>
            <p>Hola 2</p>
        </Paper>
        <Paper>
            <p>Hola</p>
        </Paper>
     </div>
  );
}

export default HorizontalSlider;
