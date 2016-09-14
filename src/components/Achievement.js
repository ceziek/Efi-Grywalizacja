import React, {Component} from 'react/';
import doneImg from '../assets/img/done.png'
import './Achievement.scss';

class Achievement extends Component {
    render() {
        var loaderStyle = {
            width: (100 - this.props.data.percent) + '%'
        };

        var colorStyle = {
            color: '#fff'
        };

        switch (this.props.data.percent) {
            case '0' :
                return (
                    <div className="Achievement">
                        <div className="Achievement-placeholder"></div>
                        <div className="Achievement-content flex">
                            <p>{this.props.data.percent}%</p>
                            <p>{this.props.data.title}</p>
                        </div>
                    </div>
                );
            case '100' :
                return (
                    <div className="Achievement flex" style={colorStyle}>
                        <div className="Achievement-image">
                            <img src={this.props.data.image} alt=""/>
                        </div>
                        <div className="Achievement-content flex">
                            <p><img src={doneImg} alt=""/></p>
                            <p className="active">{this.props.data.title}</p>
                        </div>
                    </div>
                );
            default :
                return (
                    <div className="Achievement flex" style={colorStyle}>
                        <div className="Achievement-image">
                            <img src={this.props.data.image} alt=""/>
                        </div>
                        <div className="Achievement-loader" style={loaderStyle}>
                        </div>
                        <div className="Achievement-content flex">
                            <p>{this.props.data.percent}%</p>
                            <p className="active">{this.props.data.title}</p>
                        </div>
                    </div>
                )
        }
    }
}


export default Achievement;