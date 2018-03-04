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
      <div className="col-3 navbar-bg fixed">
        <div className="nav-brand">
          <h3 className="nav-text">OpenNotes</h3>
          <div className="nav-user">
            {
              !user.displayName
              ?
              <h5 className="nav-brand-user">
                Not logged In
              </h5>
              :
              <h4>
                {user.displayName}
              </h4>
            }
          </div>
        </div>
        <div>
          <a className="upload-btn">
            Upload
          </a>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {user: state.auth};
}

export default connect(mapStateToProps, {fetchUser})(Nav);
