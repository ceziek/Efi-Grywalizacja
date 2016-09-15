import React, {Component} from 'react/';
import Menu from './Menu';

import logo from '../assets/img/logo.png';
import avatar from '../assets/img/avatar.png';

import './Header.scss';

class Header extends Component {

    constructor() {
        super();
        this.mobileHeader = this.mobileHeader.bind(this);

    }

    componentDidMount() {
        this.headerHandler = document.querySelector('.Header');
        this.mobileMenu = document.querySelector('.mobile-menu');
    }

    mobileHeader() {
        console.log('mobile header');
        this.headerHandler.classList.toggle('mobile');
        this.mobileMenu.classList.toggle('active');
    }

    render() {
        return (
            <div>
                <div className="mobile-menu active right">
                    <button className="button-default" onClick={this.mobileHeader}>MENU</button>
                </div>
                <div className="Header mobile">
                    <div className="wrapper flex">
                        <div className="Header-credits flex">
                            <div>
                                <img src={logo} role="presentation"/>
                                <img src={avatar} role="presentation"/>
                            </div>
                            <div className="Header-credits-panel left">
                                <h2>Jan Kowalski</h2>
                                <a href="#"><svg fill="#ffffff" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                                    <path d="M0 0h24v24H0z" fill="none"/>
                                </svg></a>
                                <a href="#"><svg fill="#ffffff" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
                                    <path clipRule="evenodd" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
                                </svg></a>
                            </div>
                        </div>
                        <Menu />
                        <div className="Header-logout flex">
                            <a href="#"><svg fill="#FFFFFF" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0h24v24H0z" fill="none"/>
                                <path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
                            </svg></a>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Header;