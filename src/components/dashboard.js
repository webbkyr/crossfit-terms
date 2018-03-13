import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import { Link } from 'react-router-dom';
import {resetState} from '../actions/auth';
// import DonutChart from 'react-donut-chart';
// import { VictoryPie } from 'victory'
import './dashboard.css';

export class Dashboard extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
        this.props.dispatch(resetState(this.props.response, this.props.view, this.props.score, this.props.total))
    }

    getStats(data){
        const stats = data.map((item, index) => {
            return <li className='data-word' key={index}>{item.word}</li>
        })
        return <ul className='user-stats'>{stats}</ul>;
    }

    render() {
        return (
            <div className="dashboard">
                <h2 className="dashboard-username">
                    Welcome, {this.props.username}
                </h2>
                <p>We're here to get you up to speed on CrossFit Lingo, and if you're already an experienced Crossfitter, a bit of a refresher doesn't hurt. See <a href='https://journal.crossfit.com/' target='_blank' rel='noopener noreferrer'>here</a> for some more advanced resources via the CrossFit Journal. </p>
                <h3>Phrase List</h3>
                {this.getStats(this.props.protectedData)}
                <div className="board-link">
                    <Link to="/board">Get Started!</Link>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.username}`,
        protectedData: state.protectedData.data,
        response: state.response.response,
        view: state.response.view,
        score: state.response.numCorrect,
        total: state.response.totalQuest
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
