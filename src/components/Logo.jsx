import React from 'react';
import LogoImage from '../assets/logo.png';

export default function Logo (props) {
    return (<div className={props.className}>
        <img src={LogoImage} alt="tienvii.com"></img>
    </div>)
}