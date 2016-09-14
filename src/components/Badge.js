import React, {Component} from 'react/';
import './Badge.scss';

class Badge extends Component {
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
                    <div className="Badge" >
                        <div className="Badge-placeholder"></div>

                        <div className="Badge-content flex">
                            <p> </p>
                            <p>{this.props.data.title}</p>
                        </div>
                        <div className="Badge-star">
                            <svg fill="#000000" height="18" viewBox="0 0 18 18" width="18" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z"/>
                                <path d="M0 0h18v18H0z" fill="none"/>
                            </svg>
                        </div>
                    </div>
                );
            case '100' :
                return (
                    <div className="Badge flex" style={colorStyle}>
                        <div className="Badge-image">
                            <img src={this.props.data.image} alt=""/>
                        </div>
                        <div className="Badge-content flex">
                            <p> </p>
                            <p className="active">{this.props.data.title}</p>
                        </div>
                        <div className="Badge-star active">
                            <svg fill="#000000" height="18" viewBox="0 0 18 18" width="18" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z"/>
                                <path d="M0 0h18v18H0z" fill="none"/>
                            </svg>
                            <svg fill="#000000" height="18" viewBox="0 0 18 18" width="18" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z"/>
                                <path d="M0 0h18v18H0z" fill="none"/>
                            </svg>
                            <svg fill="#000000" height="18" viewBox="0 0 18 18" width="18" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z"/>
                                <path d="M0 0h18v18H0z" fill="none"/>
                            </svg>
                        </div>
                    </div>

                );
            default :
                return (
                    <div className="Badge flex" style={colorStyle}>
                        <div className="Badge-image">
                            <img src={this.props.data.image} alt=""/>
                        </div>
                        <div className="Badge-loader" style={loaderStyle}>
                        </div>
                        <div className="Badge-content flex">
                            <p>{this.props.data.percent}%</p>
                            <p className="active">{this.props.data.title}</p>
                        </div>
                        <div className="Badge-star active">
                            <svg fill="#000000" height="18" viewBox="0 0 18 18" width="18" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z"/>
                                <path d="M0 0h18v18H0z" fill="none"/>
                            </svg>
                            <svg fill="#000000" height="18" viewBox="0 0 18 18" width="18" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z"/>
                                <path d="M0 0h18v18H0z" fill="none"/>
                            </svg>
                        </div>
                    </div>
                )
        }
    }
}

export default Badge;
