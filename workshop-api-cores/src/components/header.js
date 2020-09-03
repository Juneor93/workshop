import React from 'react';
import img from '../logo-paleta.png';

const Header = () =>(

    <header className = "head">
        <img src= {img} alt="logo"></img>
        <h1> Paleta de Cores</h1>
        <form className="pesquisar">
            <input type="text" placeholder="Pesquise uma cor aqui..." id="pesq"></input>
        </form>
    </header>
);

export default Header;