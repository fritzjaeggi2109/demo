import React from 'react';
import './button.css';

const Button = ({ btnText, onClick, btnstyle = 'btn' }) => 
    <button className={btnstyle} onClick={onClick}>{ btnText }</button>;

export default Button;