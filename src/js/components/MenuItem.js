/**
 * Created by Liukeyi on 2016/10/28.
 */
import React from 'react';
import MenuList from './MenuList.js';

class MenuItem extends React.Component {
    render() {
        const item = this.props.item;
        let subMenu =
            typeof item.items !== 'undefined' && item.items.length > 0 ?
                <MenuList classname="sub-menu" items={item.items} /> :
                null;

        return <li className={subMenu === null ? 'menu-leaf' : ''}>
                    <a className="t-n" href={typeof item.href !== 'undefined' ? item.href : '#'}>{item.text}</a>
                    {subMenu}
               </li>;
    }
}

export default MenuItem;