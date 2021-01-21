import React from 'react';

export const Navbar: React.FunctionComponent = () => (
    <nav>
        <div className="nav-wrapper">
            <a href="/" className="brand-logo">React + Typescript</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="/"> Список дел </a></li>
                <li><a href="/"> Информация </a></li>
            </ul>
        </div>
    </nav>
); 