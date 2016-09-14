import React, {Component} from 'react/';
import configAchievements from '../configs/achievementsConfig';
import configBadges from '../configs/badgesConfig';
import './Ranking.scss';

class Ranking extends Component {
    constructor() {
        super();
        this.state = {
            achievements: configAchievements,
            badges: configBadges,
            achievementsCompleted: 0,
            badgesCompleted: 0
        }
    }

    componentDidMount() {
        let completedAchievements = 0,
            completedBadges = 0;

        this.state.achievements.forEach((data) => {
            completedAchievements +=  data.percent === '100' ? 1 : 0 ;
        });
        this.state.badges.forEach((data) => {
            completedBadges +=  data.percent === '100' ? 1 : 0 ;
        });

        this.setState({
            achievementsCompleted: completedAchievements,
            badgesCompleted: completedBadges
        })
    }

    render() {
        return (
            <div className="Ranking flex">
                <div>
                    <h3>Miejsce w rankingu</h3>
                    <span><b>100</b></span>
                </div>
                <div>
                    <h3>Zadania wykonane</h3>
                    <span><b>{this.state.achievementsCompleted}</b> z {this.state.achievements.length}</span>
                </div>
                <div>
                    <h3>Zdobyte odznaki</h3>
                    <span><b>{this.state.badgesCompleted}</b> z {this.state.badges.length}</span>
                </div>
            </div>
        );
    }
}



export default Ranking;
