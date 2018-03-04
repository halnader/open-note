import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div className="container" style={{marginTop: "7.5em"}}>
      <div>
        <h1 id="signup-header">Login to gain access to course notes</h1>
        <div style={{marginTop: "2.5em"}}>
          <div className="auth-btns">
            <a href="/auth/google">
              <button className="loginBtn loginBtn--google">Login with Google</button>
            </a>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Login;
