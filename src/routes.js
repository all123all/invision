import React from "react";
import {Routes, Route} from "react-router-dom";

import SignInScreen from "./SignIn/SignIn";
import SignUpScreen from "./SignUp/SignUp";

export default function MainRoutes() {
    return(
        <Routes>
            <Route path="/" element={<SignInScreen />}/>
            <Route path="/sign-up" element={<SignUpScreen />}/>
        </Routes>
    );
}
