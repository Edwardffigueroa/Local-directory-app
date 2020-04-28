import React from 'react'
import { KeyboardBackspace } from '@material-ui/icons'
import './styles/TopBar.scss'
import LocationDisplay from './LocationDisplay'

function TopBar (){
    return (
        <div className="top-bar-container">
            <KeyboardBackspace fontSize='large' />
            <LocationDisplay />
        </div>
    );
}

export default TopBar;