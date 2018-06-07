import React from 'react';
import './header.css';
import logo from './logo.png';
import avatar from './avatar.svg';

const Header = ({user = ''}) => {
    return (
        <div className="header">
            <img className="logo" src={logo} alt="logo"/>
            <div className="align-left">
                <span id="user-name">Wellcome {user}</span>
                <img className="avatar" src={avatar} alt="avatar"/>
            </div>
        </div>
    );
};

export default Header;