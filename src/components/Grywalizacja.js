import React, {Component} from 'react/';
import Ranking from './Ranking';
import Achievement from './Achievement';
import Badge from './Badge';
import configAchievements from '../configs/achievementsConfig';
import configBadges from '../configs/badgesConfig';
import './Grywalizacja.scss';

class Grywalizacja extends Component {
    constructor() {
        super();
        this.data = {
            achievements: configAchievements,
            badges: configBadges
        };
        this.state = {
            achievementsCompleted: 0,
            badgesCompleted: 0,
            achievements: this.data.achievements,
            badges: this.data.badges
        };
    }

    componentDidMount() {
        this.completedFilterButton = document.getElementById('completedFilterButton');
        this.removeFilterButton = document.getElementById('removeFilterButton');

        this.removeFilter();
    }

    removeFilter() {
        this.removeFilterButton.classList.remove('disabled');
        this.completedFilterButton.classList.add('disabled');

        this.setState({
            achievements: this.data.achievements,
            badges: this.data.badges
        });
    }
    completedFilter() {
        this.removeFilterButton.classList.add('disabled');
        this.completedFilterButton.classList.remove('disabled');

        let filteredAchievements = this.data.achievements.filter((data) => data.percent !== '100');
        let filteredBadges = this.data.badges.filter((data) => data.percent !== '100');

        this.setState({
            achievements: filteredAchievements,
            badges: filteredBadges
        });
    }

    render() {
        let achievements = this.state.achievements.map((data, i) => {
            return ( <Achievement data={data} key={i}/> )
        });
        let badges = this.state.badges.map((data, i) => {
            return ( <Badge data={data} key={i}/> )
        });
        return (
            <div className="Grywalizacja wrapper">
                <div className="Grywalizacja-header flex">
                    <h1 className="left">Grywalizacja</h1>
                    <div>
                        <label>Pokaż</label>
                        <button className="button-default" id="removeFilterButton"
                                onClick={this.removeFilter.bind(this)}>WSZYSTKIE</button>
                        <button className="button-default" id="completedFilterButton"
                                onClick={this.completedFilter.bind(this)}>NIEUKOŃCZONE</button>
                    </div>
                </div>
                <Ranking/>
                <div>
                    <h3 className="left"><b>Odkryj</b> zaskakujące możliwości twojego konta</h3>
                    <div className="Achievements flex">
                        {achievements}
                    </div>
                </div>
                <div>
                    <h3 className="left"><b>Korzystaj</b> tak jak lubisz i zbieraj odznaki transakcyjne</h3>
                    <div className="Badges flex">
                        {badges}
                    </div>
                </div>
            </div>
        );
    }
}

export default Grywalizacja;

