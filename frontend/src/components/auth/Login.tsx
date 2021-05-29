import React from 'react'
import { connect } from 'react-redux';
import { loginUser } from '../../actions/auth';

interface LoginProps {
    loginUser: any,
}

const Login = (prop: LoginProps) => {
    return (
        <div onClick={prop.loginUser}>
            Login with Google  
        </div>
    )
}

export default connect(null, { loginUser })(Login);
