import React, { Component } from 'react';
import './Header.css';
import Linklist from './Linklist.js';


class Header extends Component {
   
    render() {
        return (
            <header className="Header">
                {this.props.linkdata.map(function (linkdata, index) {
                    return <Linklist linkadress={linkdata.linktarget} linkname={linkdata.linklabel} key={index} />
                })}
                <a >{this.props.linkname} </a>
            </header>
        );
    }
}

export default Header;
