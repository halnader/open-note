import React from 'react';
import {connect} from 'react-redux'

class Nav extends React.Component {
  render() {
    return(
      <div className="col-3 navbar-bg fixed">
        <div className="nav-brand">
          <h3 className="nav-text">OpenNotes</h3>
          <h4 className="nav-user">

          </h4>
        </div>
      </div>
    )
  }
}

export default Nav;
