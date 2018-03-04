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
      <div className="col-3 navbar-bg fixed no-gutter no-padding">
        <div className="nav-brand">
          <h3 className="nav-text">OpenNotes</h3>
          <div className="nav-user">
            <h5 className="nav-brand-user">
              Student
            </h5>
          </div>
        </div>
        <div className="upload-btn">
          <a className="white-text" href="/upload">
            Upload Notes <img src="/styles/plus.svg" style={{width: "25px", height: "25px", marginLeft: "1em"}}/>
          </a>
        </div>
        <div className="question-section">
          <p className="white-text nav-padding" style={{marginTop: "2em"}}>My Questions</p>
          <p className="white-text nav-padding" style={{marginTop: "2em"}}>Courses</p>
          <ul className="secondary-nav-text">
            <li>
              Economics <span className="nav-num">8</span>
            </li>
            <li>
              ECE <span className="nav-num">2</span>
            </li>
            <li>
              Dynamics <span className="nav-num">1</span>
            </li>
            <li>
              Comp Sci <span className="nav-num">2</span>
            </li>
            <li>
              Calculus <span className="nav-num">6</span>
            </li>
          </ul>
        </div>
        <div className="question-section">
          <p className="white-text nav-padding" style={{marginTop: "2em"}}>Following</p>
          <ul className="secondary-nav-text">
            <li>
              Zain
            </li>
            <li>
              Si Ran
            </li>
            <li>
              Lee
            </li>
            <li>
              Vaibhav
            </li>
            <li>
              Hashem
            </li>
            <li>
              Songeun
            </li>
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
