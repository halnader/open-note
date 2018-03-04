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
      <div className="container-fluid" style={{paddingTop: "0", height: "100vh"}}>
        <div className="row no-gutter" style={{height: "100vh"}}>
          <Nav/>
          <div className="col-9">
            <div className="container-fluid" style={{marginTop: "2.25em"}}>
              <div className="row">
                <div className="col-10 offset-sm-1">
                  <h1>Updates</h1>
                  <h3 style={{marginTop: "1.25em"}}>New Notes</h3>
                  <div className="col-6">
                    <div className="card">
                      <h3 style={{margin:"0.75em"}}>ECON101<span style={{float: "right", fontSize: "75%", marginTop: "0.25em"}}>2</span></h3>

                    </div>
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
