import React from 'react';
import HorizontalSlider from './HorizontalSlider'
import './styles/SectionRow.scss'

function SectionRow(){

    return (
        <section id="section-row-container">
            <h2>Supermercados</h2>
            <HorizontalSlider />
        </section>            
    );
}

export default SectionRow;