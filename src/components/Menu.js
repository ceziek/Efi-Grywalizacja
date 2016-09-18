import React, {Component} from 'react/';

import config from '../configs/menuConfig'
import './Menu.scss';
/**
 * MenuItem Component <MenuItem data={object}/>
 *     @object = {
 *             button: 'Name',
 *             icon: 'path to icon' or SVG
 *          }
 */
class MenuItem extends Component {
    render() {
        return (
            <div className="Menu-item">
                {this.props.data.icon}
                <p>{this.props.data.button}</p>
            </div>
        );
    }
}
/**
 * Menu Component <Menu/>
 */
class Menu extends Component {
    constructor() {
        super();
        //Initial Menu Items data
        this.data = config;
    }
    render() {
        return (
            <div className="Menu flex">
                { this.data.map((data, i) => <MenuItem data={data} key={i}/>) }
            </div>
        );
    }
}

export default Menu;



