/**
 * Created by Liukeyi on 2016/10/27.
 */
var React = require('react');
require('../../less/download-btn.less');

class DownloadButton extends React.Component {
    constructor() {
        super();
        this.states = {};
    }

    render() {
        return <a className={this.props.classname}><img src={this.props.src} ></img>{this.props.content}</a>;
    }
}

export default DownloadButton;