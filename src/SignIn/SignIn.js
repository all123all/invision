// import React from 'react';
import './SignIn.css';
import {Link} from "react-router-dom";
import FormBreakLine from '../components/FormBreakLine';
import CarouselComponent from '../components/CarouselComponent';

function SignInScreen(){    
    return(
        <div class="main-container">
            <div className="box-slide">
                <CarouselComponent />
            </div>
            <div className="box-user">
                <div className="logo-invision-container">
                    <p className="logo-invision-text">Invision</p>
                </div>
                <div className="welcome-message-container">
                    <p className="welcome-message-text">Welcome to Invision</p>
                </div>
                <form className="form-container">
                    <input placeholder="Users name or Email" type="email" required/>
                    <input placeholder="Password" type="password" required/>
                    <div className="link-forgot-password-container" required>
                        {/* <a href="#" className="link-forgot-password">Forgot password?</a> */}
                        <Link to="/" className="link-forgot-password">Forgot password?</Link>
                    </div>
                    <button type="submit" className="btn-sign-in">Sign In</button>
                </form>
                <FormBreakLine />
                <button className="btn-google">
                    <img className="btn-google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                    <p className="btn-google-text">Sign in with Google</p>
                </button>
                <div className="sign-up-container">
                    <p className="">New Invision?</p>
                    {/* <Link className="sign-up-container-link">Create Account</Link> */}
                    <Link to="/sign-up" className="router-link">SignUp</Link>
                </div>
            </div>
        </div>
    )
}
export default SignInScreen;