import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import { Link } from 'react-router-dom';
import {resetState} from '../actions/auth';
import DonutChart from 'react-donut-chart';

export class Dashboard extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
        this.props.dispatch(resetState(this.props.response, this.props.view, this.props.score, this.props.total))
    }

    startExercise(event){
        event.preventDefault();
        console.log('start exercise -- dispatch fetch questions');
    }

    render() {
        return (
            <div className="dashboard">
                <h3 className="dashboard-username">
                    Welcome, {this.props.username}
                </h3>
                <p>Your Progess To-Date</p>
                <DonutChart 
                    data={
                        [
                            {value: 10, label: "Cerveza"  },
                            {value: 10, label: "Izquierda"  },
                            {value: 10, label: "Esquina"  },
                            {value: 10, label: "Buenos dias"  },
                            {value: 10, label: "Buenas noches"  },
                            {value: 10, label: "Gracias"  },
                            {value: 10, label: "Hola"  },
                            {value: 10, label: "Derecha"  },
                            {value: 10, label: "Ensalada"  },
                            {value: 10, label: "Bebida"  }
                        ]
                    }
                    colors={
                        [
                            '#00a8ff',
                            '#9c88ff',
                            '#fbc531',
                            '#4cd137',
                            '#487eb0',
                            '#e84118',
                            '#7f8fa6',
                            '#273c75',
                            '#353b48',
                            '#e67e22'
                        ]
                    }
                />
                {/* <div className="dashboard-name">Name: {this.props.name}</div>
                <div className="dashboard-protected-data">
                    Protected data: {this.props.protectedData}
                </div> */}
                
                <Link className="board-link" to="/board">Get Started!</Link>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    console.log(state);
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
