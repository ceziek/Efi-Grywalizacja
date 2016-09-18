import React, {Component} from 'react/';
import './Ranking.scss';

class RankingDetail extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.name}</h3>
                <span><b>{this.props.completed.length}</b> z {this.props.items.length}</span>
            </div>
        )
    }
}

class Ranking extends Component {
    render() {
        return (
            <div className="Ranking flex">
                <div>
                    <h3>Miejsce w rankingu</h3>
                    <span><b>100</b></span>
                </div>
                <RankingDetail name='Zadania wykonane'
                               completed={this.props.data.achievementsCompleted}
                               items={this.props.data.achievements}/>
                <RankingDetail name='Zdobyte odznaki'
                               completed={this.props.data.badgesCompleted}
                               items={this.props.data.badges}/>
            </div>
        );
    }
}

export default Ranking;
