import React from 'react';
class LandingPage extends React.Component {
  render () {
    return(
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">OpenNotes</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">about <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">faq</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">log in</a>
              //need to link the Log In page
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">sign up</a>
            </li>
          </ul>
        </div>
        <div class="container">
        <h1> Access the best notes available online. </h1>
        <h1> By students, for students. </h1>
        <hr/>
        <h4> OpenNotes allows students to share notes conveniently and quickly with one another. </h4>
        </div>

      </nav>


    )
  }

}

export default LandingPage;
