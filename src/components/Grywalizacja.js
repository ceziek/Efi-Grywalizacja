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
        //Initial data
        this.data = {
            achievements: configAchievements,
            badges: configBadges
        };
        //Initial state based on initial data
        this.state = {
            achievements: this.data.achievements,
            badges: this.data.badges,
            achievementsCompleted: 0,
            badgesCompleted: 0,
            achievementsToRender: this.data.achievements,
            badgesToRender: this.data.badges
        };
        //Binding filter methods
        this.removeFilter = this.removeFilter.bind(this);
        this.completedFilter = this.completedFilter.bind(this);
    }

    componentDidMount() {
        //Handlers for filter buttons
        this.completedFilterButton = document.getElementById('completedFilterButton');
        this.removeFilterButton = document.getElementById('removeFilterButton');
        //Updating completed items prop
        this.updateCompletedItems();
        //Default filter
        this.removeFilter();
    }
    /**
     * Default filter
     */
    removeFilter() {
        //Set up styles for buttons
        this.removeFilterButton.classList.remove('disabled');
        this.completedFilterButton.classList.add('disabled');
        //Update state to render all items
        this.setState({
            achievementsToRender: this.state.achievements,
            badgesToRender: this.state.badges
        });
    }
    /**
     * Filter completed items
     */
    completedFilter() {
        //Set up styles for buttons
        this.removeFilterButton.classList.add('disabled');
        this.completedFilterButton.classList.remove('disabled');

        //Filter itemsToRender and update state
        this.setState({
            achievementsToRender: this.state.achievements.filter((data) => data.percent !== 100),
            badgesToRender: this.state.badges.filter((data) => data.percent !== 100)
        });
    }

    /**
     * Click Handler Method for incrementing percentage of Achievement or Badge Components property on click event
     * @param key: Key number passed from Component to locate event target
     * @param stateContext: Array with objects that will be context of this method
     */
    clickHandler(key, stateContext) {
        let state = stateContext;
        let percent = state[key].percent;

        if (percent < 100) {
            //Increment by 10, Highest value = 100.
            percent = (percent + 10) <= 100 ? (percent + 10) : 100
        } else {
            //If percent = 100, reset component percentage.
            percent = 0;
        }
        //Updating percentage of targeted component
        state[key].percent = percent;
        //Updating stateContext
        this.setState(state);
        //Updating completed items prop
        this.updateCompletedItems();
    }

    updateCompletedItems() {
        this.setState({
            achievementsCompleted: this.state.achievements.filter((data) => data.percent === 100),
            badgesCompleted: this.state.badges.filter((data) => data.percent === 100)
        });
    }

    render() {
        //Building <Achievement> components
        let achievements = this.state.achievementsToRender.map((data, i) => {
            return (
                <Achievement data={data}
                             key={i}
                             onClick={this.clickHandler.bind(this, i, this.state.achievementsToRender)}/>)
        });
        //Building <Badge> components
        let badges = this.state.badgesToRender.map((data, i) => {
            return (
                <Badge data={data}
                       key={i}
                       onClick={this.clickHandler.bind(this, i, this.state.badgesToRender)}/>
            )
        });
        return (
            <div className="Grywalizacja wrapper">
                <div className="Grywalizacja-header flex">
                    <h1 className="left">Grywalizacja</h1>
                    <div>
                        <label>Pokaż</label>
                        <button className="button-default"
                                id="removeFilterButton"
                                onClick={this.removeFilter}>WSZYSTKIE</button>
                        <button className="button-default"
                                id="completedFilterButton"
                                onClick={this.completedFilter}>NIEUKOŃCZONE</button>
                    </div>
                </div>
                <Ranking data={this.state}/>
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

