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
        if (typeof this.props.src === 'undefined') {
            return <div className={this.props.classname + " download-btn"}>{this.props.content}</div>;
        } else {
            return <div className={this.props.classname + " download-btn"}>
                        <img className="pa-vm" src={this.props.src} />
                        <span>{this.props.content}</span>
                   </div>;
        }
    }
}

export default DownloadButton;