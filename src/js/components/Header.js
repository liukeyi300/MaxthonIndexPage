/**
 * Created by Liukeyi on 2016/10/26.
 */
import React from 'react';
import DownloadButton from './DownloadButton.js';
require('../../less/header.less');

class Header extends React.Component {
    render() {
        return <div id="nav">
                    <div className="logo-mask">
                        <img className="pa-vm" src={require('../../images/logo.png')} alt=""/>
                    </div>
                    <div className="download-mask">
                        <DownloadButton content="立即下载" classname="btn-small pa-vm" src={require('../../images/download-pc-icon.png')}/>
                    </div>
               </div>;
    }
}

export default Header;