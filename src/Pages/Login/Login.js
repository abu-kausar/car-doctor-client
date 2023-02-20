import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import image from '../..//assets/images/login/login.svg'
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Login = () => {
    const [signedInUser, setSignedInUser] = useState({
        isLoggedIn: false,
        email: ''
    })
    const { loginUser, loginUsingGoogle } = useContext(AuthContext)

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                const { email } = user;

                const newUser = {
                    isLoggedIn: true,
                    email: email
                }
                setSignedInUser(newUser);
                console.log(user.email, signedInUser.isLoggedIn);
            })
            .catch((error) => console.error(error));
    }

    const handleSignOut = () => {

    }

    const handleGoogleSignIn = (event) => {
        loginUsingGoogle()
            .then((result) => {
                const user = result.user;
                alert(`${user.displayName} is successfully signed in`)
            })
            .catch((error) => console.error(error))
    }

    return (
        <div className="hero w-full my-20">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src={image} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 pb-10">
                    <h1 className="text-4xl text-center font-bold">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>

                        <div className="form-control mt-2">
                            <input type="submit" className="btn" value="Login" />
                        </div>

                        <p className='text-center text-orange-600 font-bold'>Or</p>

                        <div className="form-control mt-2">
                            <button onClick={handleGoogleSignIn} className="btn-primary btn btn-full">Sign In Using Google</button>
                        </div>

                        {/* {
                            !signedInUser.isLoggedIn ?
                                <div className="form-control mt-2">
                                    <input type="submit" className="btn" value="Login" />
                                </div>
                                :
                                <div className="form-control mt-2">
                                    <input type="submit" className="btn" value="Log Out" />
                                </div>
                        } */}
                    </form>


                    <p className='text-center'>New to Car Doctor <Link className='text-orange-600 font-bold' to="/signup">Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;