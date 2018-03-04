import React from 'react';
import {connect} from 'react-redux';
import {fetchUser} from './actions';

class Nav extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    const {user} = this.props;
    return(
      <div className="col-3 navbar-bg no-gutter no-padding">
        <div className="nav-brand">
          <h3 className="nav-text">OpenNotes</h3>
          <div className="nav-user">
            {
              user.displayName
              ?
              <h5 className="nav-brand-user">
                user.displayName
              </h5>
              :
              <h5 className="nav-brand-user">
                Not signed in
              </h5>
            }
          </div>
        </div>
        <div className="upload-btn">
          <a className="white-text hover-white" href="/upload">
            Upload Notes <img src="/styles/plus.svg" style={{width: "25px", height: "25px", marginLeft: "1em"}}/>
          </a>
        </div>
        <div className="question-section">
          <p className="white-text nav-padding" style={{marginTop: "2em"}}>My Questions</p>
          <p className="white-text nav-padding" style={{marginTop: "2em"}}>Courses</p>
          <ul className="secondary-nav-text">
            <li>
              <a className="nav-a" href="#">Economics <span className="nav-num">8</span></a>
            </li>
            <li>
              <a className="nav-a" href="#">ECE <span className="nav-num">2</span></a>
            </li>
            <li>
              <a className="nav-a" href="#">Dynamics <span className="nav-num">1</span></a>
            </li>
            <li>
              <a className="nav-a" href="#">Comp Sci <span className="nav-num">2</span></a>
            </li>
            <li>
              <a className="nav-a" href="#"> Calculus <span className="nav-num">6</span></a>
            </li>
          </ul>
        </div>
        <div className="question-section">
          <p className="white-text nav-padding" style={{marginTop: "2em"}}>Following</p>
          <ul className="secondary-nav-text">
            <a className="nav-a" href="#"><li>Songeun</li></a>
            <a className="nav-a" href="#"><li>Siran</li></a>
            <a className="nav-a" href="#"><li>Zain</li></a>
            <a className="nav-a" href="#"><li>Vaibhav</li></a>
            <a className="nav-a" href="#"><li>Hashem</li></a>
            <a className="nav-a" href="#"><li>Lee</li></a>
          </ul>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {user: state.auth};
}

export default connect(mapStateToProps, {fetchUser})(Nav);
