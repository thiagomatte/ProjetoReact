import React from "react";
import './Header.css';

function Header(){
    return(

        <header className= "header">
            <h1>Meu site</h1>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </nav>
        </header>

    );        
}

export default Header;