import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import image from '../..//assets/images/login/login.svg'
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Login = () => {
    const [signedInUser, setSignedInUser] = useState({
        isLoggedIn: false,
        email: ''
    })
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
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

                //get jwt token
                fetch('https://car-doctor-server-ruby.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(newUser)
                })
                .then(res=>res.json())
                .then(data=> {
                    console.log(data);
                    // local storage is not recommended to use 
                    localStorage.setItem('token', data.token);
                    navigate(from, {replace: true});
                })
                
            })
            .catch((error) => console.error(error));
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
                    </form>


                    <p className='text-center'>New to Car Doctor <Link className='text-orange-600 font-bold' to="/signup">Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;