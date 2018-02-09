import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
<<<<<<< HEAD
import { Redirect } from 'react-router-dom';
=======
import './header-bar.css'
>>>>>>> css-mobile

export class HeaderBar extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        // Only render the log out button if we are logged in
        let logOutButton;
        if (this.props.loggedIn) {
            logOutButton = (
                <button onClick={() => this.logOut()}>Log out</button>
            );
        }
        if (!this.props.loggedIn) {
            return <Redirect to='/' />;
        }

        return (
            <div className="header-bar">
                <h1>Learn Spanish App | Aprender Espanol App</h1>
                {logOutButton}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);
