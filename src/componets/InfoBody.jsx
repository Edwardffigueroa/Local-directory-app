import React from 'react';
import './styles/InfoBody.scss';

function InfoBody(props) {
    return (
        <div className="info-body-container">
            {props.children}
        </div>
    );
}

export default InfoBody;