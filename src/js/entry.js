/**
 * Created by Liukeyi on 2016/10/25.
 */
require('../less/app.less');
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.js';
const items = [{
    text: "abc",
    href: '#',
    items: [{
        text: 'sub-items'
    }]
}, {
    text: "def"
}];
ReactDOM.render(<Header logoSrc={require('../images/logo.png')} menuItems={items} />, document.getElementsByClassName('header')[0]);