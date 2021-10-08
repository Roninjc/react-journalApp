import React from 'react';
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { removeError, setError } from '../../actions/ui';
import { startRegisterEmailPasswordName } from '../../actions/auth';

export const RegisterScreen = () => {

    const dispatch = useDispatch();
    const { msgError } = useSelector(state => state.ui);

    const [ formValues, handleInputChange ] = useForm();

    const { name, email, password, password2 } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();

        if ( isFormVald() ) {
            dispatch( startRegisterEmailPasswordName( email, password, name ) );
        }
    };

    const isFormVald = () => {

        if ( name.trim().length === 0 ) {
            dispatch( setError('Name is required') );
            return false;
        } else if ( !validator.isEmail( email ) ) {
            dispatch( setError('Email is not valid') );
            return false;
        } else if ( password !== password2 ) {
            dispatch( setError('Passwords do not match') );
            return false;
        } else if ( password < 6 ) {
            dispatch( setError('Password must contain at least 6 characters') );
            return false;
        }

        dispatch( removeError() );

        return true;
    }

    return (
        <>
            <h3 className="auth__tittle">Register</h3>

            <form
                onSubmit={ handleRegister }
                className="animate__animated animate__fadeIn animate__faster"
            >
                
                {
                    msgError &&
                    (
                        <div className="auth__alert-error">
                            { msgError }
                        </div>
                    )
                }

                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                />

                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />

                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={ password }
                    onChange={ handleInputChange }
                />

                <input
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    className="auth__input"
                    value={ password2 }
                    onChange={ handleInputChange }
                />

                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                >
                    Register
                </button>

                {/* <div className="auth__social-networks">
                    <p>Login with social network</p>

                    <div 
                        className="google-btn"
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div> */}

                <Link
                    to="/auth/login"
                    className="link"
                >
                    Already registered?
                </Link>
            </form>
        </>
    )
}
