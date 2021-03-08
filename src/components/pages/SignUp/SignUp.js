import React, { useState, useEffect } from 'react';
import './SignUp.css';
import fire from '../../../fire';
import Login from '../../Login';
import UserProfile from '../../UserProfile/UserProfile';

function SignUp() {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState(false);

    const clearInputs = () => {
        setEmail('');
        setPassword('');
    };
    const clearErrors = () => {
        setEmailError('');
        setPasswordError('');
    };

    const handleLogin = () => {
        console.log('logowanie');
        clearErrors();
        fire.auth()
            .signInWithEmailAndPassword(email, password)
            .catch((err) => {
                switch (err.code) {
                    case 'auth/invalid-email':
                    case 'auth/user-disabled':
                    case 'auth/user-not-found':
                        setEmailError(err.message);
                        break;
                    case 'auth/wrong-password':
                        setPasswordError(err.message);
                        break;
                }
            });
    };
    const handleSignup = () => {
        console.log('wejscie');
        clearErrors();
        fire.auth()
            .createUserWithEmailAndPassword(email, password)
            .catch((err) => {
                switch (err.code) {
                    case 'auth/email-already-in-use':
                    case 'auth/invalid-email':
                        setEmailError(err.message);
                        break;
                    case 'auth/weak-password':
                        setPasswordError(err.message);
                        break;
                }
            });
    };
    const handleLogout = () => {
        fire.auth().signOut();
    };

    const authListener = () => {
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                clearInputs();
                setUser(user);
            } else {
                setUser('');
            }
        });
    };

    useEffect(() => {
        authListener();
    }, []);

    return (
        <>
            <section className="signup-wrapper ">
                <div className="card-container">
                    {user ? (
                        <div>
                            <UserProfile handleLogout={handleLogout} />
                        </div>
                    ) : (
                        <>
                            <div className="signup-form">
                                <Login
                                    email={email}
                                    setEmail={setEmail}
                                    password={password}
                                    setPassword={setPassword}
                                    handleLogin={handleLogin}
                                    handleSignup={handleSignup}
                                    hasAccount={hasAccount}
                                    setHasAccount={setHasAccount}
                                    emailError={emailError}
                                    passwordError={passwordError}
                                />
                            </div>
                            <div className="signup-image">
                                <img
                                    src="images/svg5-love.svg"
                                    alt="woman with ballon"
                                />
                            </div>
                        </>
                    )}
                </div>
            </section>
        </>
    );
}

export default SignUp;
