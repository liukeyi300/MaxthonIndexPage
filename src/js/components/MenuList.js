/**
 * Created by Liukeyi on 2016/10/28.
 */
import React from 'react';
import MenuItem from './MenuItem.js';
require('../../less/menu.less');

class MenuList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const items = this.props.items;
        const menuItem = typeof items !== 'undefined' && items.length > 0 ? items.map((item) =>
            <MenuItem item={item} />
        ) : null;

        return (
            <ul className={this.props.classname}>
                {menuItem}
            </ul>
        );
    }
}

export default MenuList;