import React from 'react';

class Form extends React.Component {
  render() {
    return(
      <div>
        <div className="container">
          <div className="row" style={{margin: "25% 25%", justifyContent: "center"}}>
            <a className="btn btn-primary" style={{width: "50em", height: "5em", paddingTop: "1.75em", fontSize: "3em", color: "#fff", textAlign: "center"}} href="/api/runpython">Upload my files!</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Form;
