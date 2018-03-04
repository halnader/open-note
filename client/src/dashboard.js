import React from 'react';
import Nav from './nav';

class Dashboard extends React.Component {
  componentDidMount() {

  }

  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return(
      <div className="container-fluid">
        <div className="row no-gutter">
          <Nav/>
          <div className="col-9">
            <div>Dash</div>
          </div>
        </div>
      </div>

    )
  }
}

export default Dashboard;
