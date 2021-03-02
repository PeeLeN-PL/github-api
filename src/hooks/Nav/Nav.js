// @snippet
import React from 'react';
import {
    Link
} from "react-router-dom";

const Nav = () => {
    return (
        <nav id="nav">
            <ul>
                <li><Link to="/">Wyszukiwarka projektów githubowych</Link></li>
                <li><Link to="/requirements">Założenia całej aplikacji</Link></li>
                <li><Link to="/factorial">Wyliczanie silni</Link></li>
            </ul>
        </nav>
    )
}
export default Nav