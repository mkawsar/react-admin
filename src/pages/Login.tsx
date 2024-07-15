import * as Yup from 'yup';
import React, { useEffect, useState } from 'react';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    useEffect(() => {
        document.title = 'Admin | Login';
        document.body.classList.add('bg-gradient-primary')
        return function cleanup() {
            document.body.classList.remove('bg-gradient-primary');
        };
    }, []);

    const validation = Yup.object().shape({
        email: Yup.string().email().required(),
    });

    const handleSubmitLoginForm = async (e: React.FormEvent) => {
        e.preventDefault();
        const form = {
            email: email
        };
        const formErrors = validation.validate(form);
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-10 col-lg-12 col-md-9">
                    <div className="card o-hidden border-0 shadow-lg my-5">
                        <div className="card-body p-0">
                            <div className="row">
                                <div className="col-lg-6 d-none d-lg-block bg-login-image" />
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                            </div>
                                            <form className="user" onSubmit={handleSubmitLoginForm}>
                                                <div className="form-group">
                                                    <input type="email" className="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..." value={email} onChange={(e) => setEmail(e.target.value)} />
                                                </div>
                                                <div className="form-group">
                                                    <input type="password" className="form-control form-control-user" id="exampleInputPassword" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                                </div>
                                                <div className="form-group">
                                                    <div className="custom-control custom-checkbox small">
                                                        <input type="checkbox" className="custom-control-input" id="customCheck" />
                                                        <label className="custom-control-label" htmlFor="customCheck">Remember
                                                        Me</label>
                                                    </div>
                                                </div>
                                                <button type='submit' className="btn btn-primary btn-user btn-block">Login</button>
                                                <hr />
                                                <a href="index.html" className="btn btn-google btn-user btn-block">
                                                    <i className="fab fa-google fa-fw" /> Login with Google
                                                </a>
                                                <a href="index.html" className="btn btn-facebook btn-user btn-block">
                                                    <i className="fab fa-facebook-f fa-fw" /> Login with Facebook
                                                </a>
                                            </form>
                                            <hr />
                                            <div className="text-center">
                                                <a className="small" href="forgot-password.html">Forgot Password?</a>
                                            </div>
                                            <div className="text-center">
                                                <a className="small" href="register.html">Create an Account!</a>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Login;
