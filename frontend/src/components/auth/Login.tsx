import React from "react";
import { connect } from "react-redux";
import { loginUser } from "../../actions/auth";
import { withRouter } from "react-router-dom";

interface LoginProps {
  history: any;
  [key: string]: any;
}

const Login = (props: LoginProps) => {
  return (
    <div onClick={() => props.loginUser(props.history)}>Login with Google</div>
  );
};

export default connect(null, { loginUser })(withRouter(Login));
