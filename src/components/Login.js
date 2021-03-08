import React from 'react';

const Login = (props) => {
    const {
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError,
    } = props;

    return (
        <section className="login">
            <div className="loginContainer">
                <h1 className="signup-title">Sign up now</h1>

                <label>Email: </label>
                <input
                    type="text"
                    autoFocus
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <p className="errorMsg">{emailError}</p>

                <label>Password: </label>
                <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <p className="errorMsg">{passwordError}</p>

                <div className="btnContainer">
                    {hasAccount ? (
                        <>
                            <button
                                className="btn btn-outline"
                                onClick={handleLogin}
                            >
                                Log in
                            </button>
                            <p>
                                Don't have an account ?
                                <span
                                    onClick={() => setHasAccount(!hasAccount)}
                                >
                                    Sign up
                                </span>
                            </p>
                        </>
                    ) : (
                        <>
                            <button
                                className="btn btn-outline"
                                onClick={handleSignup}
                            >
                                Create a new account
                            </button>
                            <p>
                                Have an account ?
                                <span
                                    onClick={() => setHasAccount(!hasAccount)}
                                >
                                    Sign in
                                </span>
                            </p>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Login;
