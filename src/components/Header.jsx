import React, { Component } from 'react';
import './Header.css'
import Logo from './logoo.png'

class Header extends Component {
    state = {}
    render() {
        return (
            <div className="header">
                <ul>
                    <li><a href="/"><img src={Logo} width="100px" height="100px"></img><h1>Rate My Partner</h1></a></li>
                    <li><a href="/directory">Partners</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </div>
        );
    }
}

export default Header;