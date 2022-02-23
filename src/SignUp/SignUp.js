import React, { useState } from 'react';
import {Link} from "react-router-dom";
// import './SignUp.css';
import FormBreakLine from '../components/FormBreakLine';
import CarouselComponent from '../components/CarouselComponent';


function SignUpScreen(){
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
                    <p className="welcome-message-text">Getting Started</p>
                </div>
                <form className="form-container">
                    <input placeholder="Full Name" type="text" name="name" required/>
                    <input placeholder="Users name or Email" type="email" name="email" required/>
                    <input placeholder="Create Password" type="password" name="password" required/>
                    <div className="link-forgot-password-container">
                        <a href="#" className="link-forgot-password">Forgot password?</a>
                    </div>
                    <button type="submit" className="btn-sign-in">Sign Up</button>
                </form>
                <FormBreakLine />
                <button className="btn-google">
                    <img className="btn-google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                    <p className="btn-google-text">Sign up with Google</p>
                </button>
                <div className="terms-container">
                    <p>By signing up, you agree to <b>Invision </b><a href="#" className="terms-container-links">Terms of Condition </a>and <a href="#" className="terms-container-links">Privacy Policy</a></p>
                </div>
                <div className="sign-up-container">
                    Already on Invision? <Link to="/" className="router-link"> SignIn</Link>         
                </div>
            </div>
        </div>
    )
}
export default SignUpScreen;