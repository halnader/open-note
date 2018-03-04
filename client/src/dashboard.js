import React from 'react';
import Nav from './nav';

class Dashboard extends React.Component {
  render() {
    return(
      <div className="container-fluid" style={{padding: "0", height: "100vh"}}>
        <div className="row no-gutter" style={{height: "100vh"}}>
          <Nav/>
          <div className="col-9" style={{backgroundColor: "#F7F4F8", overflow: "hidden", overflowY:"scroll"}}>
            <div className="container-fluid" style={{marginTop: "2.25em"}}>
              <div className="row">
                <div className="col-10 offset-sm-1" style={{color: "#484848"}}>
                  <h1>Updates</h1>
                  <h3 style={{marginTop: "1.25em"}}>New Notes</h3>
                  <div className="row">
                    <div className="col-12 col-sm-5 no-padding" style={{marginTop: "0"}}>
                      <div className="card">
                        <h3>MAT101<span style={{float: "right", fontSize: "75%", marginTop: "0.25em"}}>2</span></h3>
                        <div style={{marginBottom: "-0.5em", marginTop: "0.5em"}}>
                          <a href="#">
                            <p style={{color: "#484848"}}>Lecture 3 Notes</p>
                            <p style={{color: "#4a92c6", marginTop:"-1em"}}>5 days ago</p>
                          </a>
                          <span style={{float: "right", marginTop: "-3.5em"}}>
                            <img style={{height: "20px", width: "20px", backgroundColor: "#00477B"}}/> <span style={{marginTop: "1.5em"}}>User</span>
                            <a href="/api/delete/:id" style={{marginLeft: "1em"}}>
                              <i className="fas fa-times" style={{color: "#484848"}}></i>
                            </a>
                          </span>
                        </div>
                        <hr style={{marginTop: "0.25em", marginBottom: "0.1em"}}/>
                        <div style={{marginBottom: "-1em", marginTop: "0.5em"}}>
                          <a href="#">
                            <p style={{color: "#484848"}}>Lecture 3 Notes</p>
                            <p style={{color: "#4a92c6", marginTop:"-1em"}}>5 days ago</p>
                          </a>
                          <span style={{float: "right", marginTop: "-3.5em"}}>
                            <img style={{height: "20px", width: "20px", backgroundColor: "#00477B"}}/> <span style={{marginTop: "1.5em"}}>User</span>
                            <a href="/api/delete/:id" style={{marginLeft: "1em"}}>
                              <i className="fas fa-times" style={{color: "#484848"}}></i>
                            </a>
                          </span>
                        </div>
                        <hr/>
                        <div>
                          <span>
                            <a href="#" style={{color: "#4a92c6"}}>
                              Dismiss all
                            </a>
                            <a href="#" style={{float: "right", color: "#4a92c6"}}>
                              See more
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-5" style={{marginTop: "0", marginLeft: "0.5em"}}>
                      <div className="card">
                        <h3>ENG150<span style={{float: "right", fontSize: "75%", marginTop: "0.25em"}}>2</span></h3>
                        <div style={{marginBottom: "-0.5em", marginTop: "0.5em"}}>
                          <a href="#">
                            <p style={{color: "#484848"}}>Lecture 3 Notes</p>
                            <p style={{color: "#4a92c6", marginTop:"-1em"}}>5 days ago</p>
                          </a>
                          <span style={{float: "right", marginTop: "-3.5em"}}>
                            <img style={{height: "20px", width: "20px", backgroundColor: "#00477B"}}/> <span style={{marginTop: "1.5em"}}>User</span>
                            <a href="/api/delete/:id" style={{marginLeft: "1em"}}>
                              <i className="fas fa-times" style={{color: "#484848"}}></i>
                            </a>
                          </span>
                        </div>
                        <hr style={{marginTop: "0.25em", marginBottom: "0.1em"}}/>
                        <div style={{marginBottom: "-1em", marginTop: "0.5em"}}>
                          <a href="#">
                            <p style={{color: "#484848"}}>Lecture 3 Notes</p>
                            <p style={{color: "#4a92c6", marginTop:"-1em"}}>5 days ago</p>
                          </a>
                          <span style={{float: "right", marginTop: "-3.5em"}}>
                            <img style={{height: "20px", width: "20px", backgroundColor: "#00477B"}}/> <span style={{marginTop: "1.5em"}}>User</span>
                            <a href="/api/delete/:id" style={{marginLeft: "1em"}}>
                              <i className="fas fa-times" style={{color: "#484848"}}></i>
                            </a>
                          </span>
                        </div>
                        <hr/>
                        <div>
                          <span>
                            <a href="#" style={{color: "#4a92c6"}}>
                              Dismiss all
                            </a>
                            <a href="#" style={{float: "right", color: "#4a92c6"}}>
                              See more
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-5 no-padding" style={{marginTop: "1.5em"}}>
                      <div className="card">
                        <h3>ECON101<span style={{float: "right", fontSize: "75%", marginTop: "0.25em"}}>2</span></h3>
                        <div style={{marginBottom: "-0.5em", marginTop: "0.5em"}}>
                          <a href="#">
                            <p style={{color: "#484848"}}>Lecture 3 Notes</p>
                            <p style={{color: "#4a92c6", marginTop:"-1em"}}>5 days ago</p>
                          </a>
                          <span style={{float: "right", marginTop: "-3.5em"}}>
                            <img style={{height: "20px", width: "20px", backgroundColor: "#00477B"}}/> <span style={{marginTop: "1.5em"}}>User</span>
                            <a href="/api/delete/:id" style={{marginLeft: "1em"}}>
                              <i className="fas fa-times" style={{color: "#484848"}}></i>
                            </a>
                          </span>
                        </div>
                        <hr style={{marginTop: "0.25em", marginBottom: "0.1em"}}/>
                        <div style={{marginBottom: "-1em", marginTop: "0.5em"}}>
                          <a href="#">
                            <p style={{color: "#484848"}}>Lecture 3 Notes</p>
                            <p style={{color: "#4a92c6", marginTop:"-1em"}}>5 days ago</p>
                          </a>
                          <span style={{float: "right", marginTop: "-3.5em"}}>
                            <img style={{height: "20px", width: "20px", backgroundColor: "#00477B"}}/> <span style={{marginTop: "1.5em"}}>User</span>
                            <a href="/api/delete/:id" style={{marginLeft: "1em"}}>
                              <i className="fas fa-times" style={{color: "#484848"}}></i>
                            </a>
                          </span>
                        </div>
                        <hr/>
                        <div>
                          <span>
                            <a href="#" style={{color: "#4a92c6"}}>
                              Dismiss all
                            </a>
                            <a href="#" style={{float: "right", color: "#4a92c6"}}>
                              See more
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-5" style={{marginTop: "1.5em", marginLeft: "0.5em"}}>
                      <div className="card">
                        <h3>SCI150<span style={{float: "right", fontSize: "75%", marginTop: "0.25em"}}>2</span></h3>
                        <div style={{marginBottom: "-0.5em", marginTop: "0.5em"}}>
                          <a href="#">
                            <p style={{color: "#484848"}}>Lecture 3 Notes</p>
                            <p style={{color: "#4a92c6", marginTop:"-1em"}}>5 days ago</p>
                          </a>
                          <span style={{float: "right", marginTop: "-3.5em"}}>
                            <img style={{height: "20px", width: "20px", backgroundColor: "#00477B"}}/> <span style={{marginTop: "1.5em"}}>User</span>
                            <a href="/api/delete/:id" style={{marginLeft: "1em"}}>
                              <i className="fas fa-times" style={{color: "#484848"}}></i>
                            </a>
                          </span>
                        </div>
                        <hr style={{marginTop: "0.25em", marginBottom: "0.1em"}}/>
                        <div style={{marginBottom: "-1em", marginTop: "0.5em"}}>
                          <a href="#">
                            <p style={{color: "#484848"}}>Lecture 3 Notes</p>
                            <p style={{color: "#4a92c6", marginTop:"-1em"}}>5 days ago</p>
                          </a>
                          <span style={{float: "right", marginTop: "-3.5em"}}>
                            <img style={{height: "20px", width: "20px", backgroundColor: "#00477B"}}/> <span style={{marginTop: "1.5em"}}>User</span>
                            <a href="/api/delete/:id" style={{marginLeft: "1em"}}>
                              <i className="fas fa-times" style={{color: "#484848"}}></i>
                            </a>
                          </span>
                        </div>
                        <hr/>
                        <div>
                          <span>
                            <a href="#" style={{color: "#4a92c6"}}>
                              Dismiss all
                            </a>
                            <a href="#" style={{float: "right", color: "#4a92c6"}}>
                              See more
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-10 offset-sm-1" style={{color: "#484848"}}>
                  <h3 style={{marginTop: "1.25em"}}>Recommendations</h3>
                  <div className="row">
                    <div className="col-12 col-sm-5 no-padding" style={{marginTop: "0"}}>
                      <div className="card">
                        <h3>CS101<span style={{float: "right", fontSize: "75%", marginTop: "0.25em"}}>2</span></h3>
                        <div style={{marginBottom: "-0.5em", marginTop: "0.5em"}}>
                          <a href="#">
                            <p style={{color: "#484848"}}>Lecture 3 Notes</p>
                            <p style={{color: "#4a92c6", marginTop:"-1em"}}>5 days ago</p>
                          </a>
                          <span style={{float: "right", marginTop: "-3.5em"}}>
                            <img style={{height: "20px", width: "20px", backgroundColor: "#00477B"}}/> <span style={{marginTop: "1.5em"}}>User</span>
                            <a href="/api/delete/:id" style={{marginLeft: "1em"}}>
                              <i className="fas fa-times" style={{color: "#484848"}}></i>
                            </a>
                          </span>
                        </div>
                        <hr style={{marginTop: "0.25em", marginBottom: "0.1em"}}/>
                        <div style={{marginBottom: "-1em", marginTop: "0.5em"}}>
                          <a href="#">
                            <p style={{color: "#484848"}}>Lecture 3 Notes</p>
                            <p style={{color: "#4a92c6", marginTop:"-1em"}}>5 days ago</p>
                          </a>
                          <span style={{float: "right", marginTop: "-3.5em"}}>
                            <img style={{height: "20px", width: "20px", backgroundColor: "#00477B"}}/> <span style={{marginTop: "1.5em"}}>User</span>
                            <a href="/api/delete/:id" style={{marginLeft: "1em"}}>
                              <i className="fas fa-times" style={{color: "#484848"}}></i>
                            </a>
                          </span>
                        </div>
                        <hr/>
                        <div>
                          <span>
                            <a href="#" style={{color: "#4a92c6"}}>
                              Dismiss all
                            </a>
                            <a href="#" style={{float: "right", color: "#4a92c6"}}>
                              See more
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-5" style={{marginTop: "0", marginLeft: "0.5em"}}>
                      <div className="card">
                        <h3>APS150<span style={{float: "right", fontSize: "75%", marginTop: "0.25em"}}>2</span></h3>
                        <div style={{marginBottom: "-0.5em", marginTop: "0.5em"}}>
                          <a href="#">
                            <p style={{color: "#484848"}}>Lecture 3 Notes</p>
                            <p style={{color: "#4a92c6", marginTop:"-1em"}}>5 days ago</p>
                          </a>
                          <span style={{float: "right", marginTop: "-3.5em"}}>
                            <img style={{height: "20px", width: "20px", backgroundColor: "#00477B"}}/> <span style={{marginTop: "1.5em"}}>User</span>
                            <a href="/api/delete/:id" style={{marginLeft: "1em"}}>
                              <i className="fas fa-times" style={{color: "#484848"}}></i>
                            </a>
                          </span>
                        </div>
                        <hr style={{marginTop: "0.25em", marginBottom: "0.1em"}}/>
                        <div style={{marginBottom: "-1em", marginTop: "0.5em"}}>
                          <a href="#">
                            <p style={{color: "#484848"}}>Lecture 3 Notes</p>
                            <p style={{color: "#4a92c6", marginTop:"-1em"}}>5 days ago</p>
                          </a>
                          <span style={{float: "right", marginTop: "-3.5em"}}>
                            <img style={{height: "20px", width: "20px", backgroundColor: "#00477B"}}/> <span style={{marginTop: "1.5em"}}>User</span>
                            <a href="/api/delete/:id" style={{marginLeft: "1em"}}>
                              <i className="fas fa-times" style={{color: "#484848"}}></i>
                            </a>
                          </span>
                        </div>
                        <hr/>
                        <div>
                          <span>
                            <a href="#" style={{color: "#4a92c6"}}>
                              Dismiss all
                            </a>
                            <a href="#" style={{float: "right", color: "#4a92c6"}}>
                              See more
                            </a>
                          </span>
                        </div>
                      </div>
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
