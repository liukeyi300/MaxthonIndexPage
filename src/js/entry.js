/**
 * Created by Liukeyi on 2016/10/25.
 */
require('../less/app.less');
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.js';

ReactDOM.render(<Header />, document.getElementsByClassName('header')[0]);