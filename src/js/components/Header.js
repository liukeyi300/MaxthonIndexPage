/**
 * Created by Liukeyi on 2016/10/26.
 */
import React from 'react';
import MenuList from './MenuList.js';
require('../../less/header.less');

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogoClick = this.handleLogoClick.bind(this);
    }

    handleLogoClick() {

    }

    render() {
        return <div id="nav">
                    <a className="logo-mask" href="#">
                        {typeof this.props.logoSrc !== 'undefined' ?
                            <img className="pa-vm" src={this.props.logoSrc}/> : ''
                        }
                    </a>
                    <MenuList items={this.props.menuItems} classname="main-menu" />
               </div>;
    }
}

export default Header;