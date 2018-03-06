import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {registerUser} from '../actions/users';
import {login} from '../actions/auth';
import Input from './input';
import {required, nonEmpty, matches, length, isTrimmed} from '../validators';
import './registration-form.css';
import {Link, Redirect} from 'react-router-dom';

const passwordLength = length({min: 5, max: 72});
const matchesPassword = matches('password');

export class RegistrationForm extends React.Component {
    onSubmit(values) {
        const {username, password} = values;
        const user = {username, password};
        return this.props
            .dispatch(registerUser(user))
            .then(() => this.props.dispatch(login(username, password)));
    }

    render() {
        return (
            <div className="registration-container">
                <form
                    className="login-form"
                    onSubmit={this.props.handleSubmit(values =>
                        this.onSubmit(values)
                    )}>
                    {/* <label htmlFor="firstName">First name | Nombre Primero</label>
                    <Field component={Input} type="text" name="firstName" /> */}
                    {/* <label htmlFor="lastName">Last name | Apellido</label>
                    <Field component={Input} type="text" name="lastName" /> */}
                    {/* <label htmlFor="username">Username | Usuario</label> */}
                    <Field
                        placeholder="Username"
                        component="input"
                        type="text"
                        name="username"
                        validate={[required, nonEmpty, isTrimmed]}
                    />
                    {/* <label htmlFor="password">Password | Contraseña</label> */}
                    <Field
                        placeholder="Password"
                        component="Input"
                        type="password"
                        name="password"
                        validate={[required, passwordLength, isTrimmed]}
                    />
                    {/* <label htmlFor="passwordConfirm">Confirm password | Confirmar contraseña</label> */}
                    <Field
                        component="Input"
                        placeholder="Confirm password"
                        type="password"
                        name="passwordConfirm"
                        validate={[required, nonEmpty, matchesPassword]}
                    />
                    <button className="register-button"
                        type="submit"
                        disabled={this.props.pristine || this.props.submitting}>
                        Register
                    </button>
                </form>
                <Link to="/">Login</Link>
            </div>
        );
    }
}

export default reduxForm({
    form: 'registration',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationForm);
