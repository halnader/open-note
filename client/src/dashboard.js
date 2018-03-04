import React from 'react';
import Nav from './nav';

class Dashboard extends React.Component {
  renderCard() {
    <div className="col-6">
      <div className="card">
        <h1>Test</h1>
      </div>
    </div>
  }
  
  render() {
    return(
      <div className="container-fluid">
        <div className="row no-gutter">
          <Nav/>
          <div className="col-9">
            <div className="container-fluid" style={{marginTop: "2.25em"}}>
              <div className="row">
                <div className="col-10 offset-sm-1">
                  <h1>Updates</h1>
                  <h3 style={{marginTop: "1.25em"}}>New Notes</h3>
                  <div className="col-6">
                    <div className="card">
                      <h1>Yo</h1>
                    </div>
                    {this.props.renderCard}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default Dashboard;
