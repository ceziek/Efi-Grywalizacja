import React, {Component} from 'react/';

import config from '../configs/menuConfig'
import './Menu.scss';

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



class Menu extends Component {

    constructor() {
        super();
        this.data = config;
    }

    render() {
        return (
            <div className="Menu">
                {this.data.map((data, i) => {
                    return (
                        <MenuItem data={data} key={i}/>
                    )
                })}
            </div>
        );
    }
}

export default Menu;



