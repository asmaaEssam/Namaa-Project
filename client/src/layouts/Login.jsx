import React from 'react';
import LoginPage from '../components/LoginPage';
import ExamplesNavbar from '../components/ExamplesNavbar'
import './dataentry.css'

const Login = () => {
    return ( 
        <>
        <div class="background-image"></div>
        <div class="content">
        <ExamplesNavbar/>
        <div className="page-header">
            <div className="content" id='loginContainer'>
                <LoginPage/>
            </div>
        </div>
        </div>
        </>
     );
}
 
export default Login;