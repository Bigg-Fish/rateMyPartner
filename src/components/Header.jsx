import React, { Component } from 'react';
import './Header.css'

class Header extends Component {
    state = {}
    render() {
        return (
            <div className="header">
                <ul>
                    <li><a href="/"><h1>Rate My Partner</h1></a></li>
                    <li><a href="/directory">Partner</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </div>
        );
    }
}

export default Header;