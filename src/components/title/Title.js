import React from 'react';
import './title.css';

const Title = ({ titleText }) => {
    return (
        <h1 className="your-account">{titleText}</h1>
    );
};

export default Title;