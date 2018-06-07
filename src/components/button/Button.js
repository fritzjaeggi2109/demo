import React from 'react';
import './button.css';

const Button = ({ btnText, onClick }) => {
    return (
        <button className="menu-btn" onClick={onClick}>{ btnText }</button>
    );
};

export default Button;