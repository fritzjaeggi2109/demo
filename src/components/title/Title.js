import React from 'react';
import './title.css';

const Title = ({ titleText, titlestyle }) => 
    <h1 className={titlestyle}>{titleText}</h1>;

export default Title;