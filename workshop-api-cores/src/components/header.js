import React from 'react';
import img from '../logo-paleta.png';

const Header = () =>(

    <header className = "head">
        <img src= {img} alt="logo"></img>
        <h1> Paleta de Cores</h1>
    </header>
);

export default Header;