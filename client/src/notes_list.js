import React from 'react';
const styles= {
  h1 {
    font-size: 30px;
    display: inline-block;
    font-family: 'Roboto', sans-serif;
    color: #2677BE
  }
  h2 {
    font-size: 18px;
    display: inline-block;
    padding-left: 10px;
    font-family: 'Roboto', sans-serif;
    color: #45444F;
  }
  span {
    font-size: 25px;
    padding-left: 30px;
    font-family: 'Roboto', sans-serif;
    color: #00477B;
  }
  h3 {
    padding-left: 60px;
    font-family: 'Roboto', sans-serif;
    color: #45444F;
    font-size: 25px;
  }
  span b {
    font-size: 160%;
    font-family: 'Roboto', sans-serif;
    color: #45444F;
    padding-left: 30px;
  }
  .notes_1 {
    border: 1px solid #F7F4F8;
    border-radius: 8px;
    box-shadow: 1px 3px #F7F4F8;
    width: 700px;
  }
  .login {
    border: 0.5px solid #45444F;
    border-radius: 3px;
    width: 70px;
    height: 20px;
    background-color: #72B9FF;
    color: white;
  }
  .sign_up {
    border: 0.5px solid #45444F;
    border-radius: 3px;
    width: 70px;
    height: 20px;
    background-color: #2677BE;
    color: white;
  }
  .user {
    border: 1px solid black;
    width: 12px;
    height: 12px;
    background-color: #2677BE;
  }

  span3 {
    display: inline-block;
    font-family: 'Roboto', sans-serif;
    padding-left: 8em;
  }
  span4 {
    display: inline-block;
    font-family: 'Roboto', sans-serif;
    color: #287AC1;
    padding-left: 15em;
    font-size: 14px;
  }
  span5 {
    display: inline-block;
    font-family: 'Roboto', sans-serif;
    color: #287AC1;
    padding-left: 3em;
    font-size: 14px;
  }
  span6 {
    display: inline-block;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    padding-left: 4em;
  }
  span7 {
    display: inline-block;
    font-family: 'Roboto', sans-serif;
    font-size:14px;
    padding-left: 1em;
    padding-right: 2em;
  }
  span8 {
    display: inline-block;
    font-family: 'Roboto', sans-serif;
    padding-left: 28em;
  }
  span9 {
    display: inline-block;
    font-family: 'Roboto', sans-serif;
    color: #45444F;
    padding-left: 1em;
    padding-right: 10px;
  }
  .circle {
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 1px solid #287AC1;
  }
  span10 {
    display: inline-block;
    font-family: 'Roboto', sans-serif;

    padding-left: 5px;
    padding-right: 12px;
  }
  span11 {
    display: inline-block;
    padding-left: 5px;
    font-family: 'Roboto', sans-serif;

    padding-right: 470px;
  }
  .notes {
    padding-left: 65px;
    font-family: 'Roboto', sans-serif;

  }
  .circle1 {
    padding-left: 10px;
    padding-bottom: 10px;
    color: #287AC1;
  }
  hr {
    border-color: #F7F4F8;
    background-color: #F7F4F8;
  }
  .header {
    display: inline-block;
    padding-left: 30px;
  }
};

class Notes extends React.Component {
  render() {
    return(
      <body>
        <div class="header"><h1><a className="header" href="/dashboard">OpenNotes</a></h1></div>
        <span3><div class='search_bar'>
          <form>
            <input placeholder="search"></input>
            <button style={{backgroundColor: "#2677BE", border: "none", borderRadius: "2px", color: "#ffffff"}}>Search</button>
          </form>
        </div></span3>
        <span4>About</span4>
        <span5>Courses</span5>
        <span6><div class="login"><center>Login</center></div></span6>
        <span7><div class="sign_up"><center>Sign Up</center></div></span7>
        <hr/>
        <br/>
        <span><b>ECO101</b> Economics</span>
        <br/>
        <br/>
        <h3>New Notes</h3>
        <div class='notes'>
        <div class='notes_1'>
          <h2> Lecture 3 Notes</h2>
          <span8><div class="user"></div></span8>
          <span9>User</span9>
          <div class='circle1'>
            <div class='circle'></div>
            <span10>9</span10>
            <div class='circle'></div>
            <span10>6</span10>
            <div class='circle'></div>
            <span11>3</span11>
            <div class='circle'></div>
            <span10>3</span10>
          </div>
        </div>
        </div>
        <br/>
        <div class='notes'>
        <div class='notes_1'>
          <h2>Lecture 3 Notes</h2>
          <span8><div class="user"></div></span8>
          <span9>User</span9>
          <div class='circle1'>
            <div class='circle'></div>
            <span10>9</span10>
            <div class='circle'></div>
            <span10>6</span10>
            <div class='circle'></div>
            <span11>3</span11>
            <div class='circle'></div>
            <span10>3</span10>
          </div>
        </div>
        </div>
        <br/>
        <div class='notes'>
        <div class='notes_1'>
          <h2>Marginal Cost</h2>
          <span8><div class="user"></div></span8>
          <span9>User</span9>
          <div class='circle1'>
            <div class='circle'></div>
            <span10>9</span10>
            <div class='circle'></div>
            <span10>6</span10>
            <div class='circle'></div>
            <span11>3</span11>
            <div class='circle'></div>
            <span10>3</span10>
          </div>
        </div>
        </div>
        <br/>
        <div class='notes'>
        <div class='notes_1'>
          <h2>Lecture 4 Notes</h2>
          <span8><div class="user"></div></span8>
          <span9>User</span9>
          <div class='circle1'>
            <div class='circle'></div>
            <span10>9</span10>
            <div class='circle'></div>
            <span10>6</span10>
            <div class='circle'></div>
            <span11>3</span11>
            <div class='circle'></div>
            <span10>3</span10>
          </div>
        </div>
      </div>
        <br/>
        <div class='notes'>
        <div class='notes_1'>
          <h2>Mar 11-Bitcoin</h2>
          <span8><div class="user"></div></span8>
          <span9>User</span9>
          <div class='circle1'>
            <div class='circle'></div>
            <span10>9</span10>
            <div class='circle'></div>
            <span10>6</span10>
            <div class='circle'></div>
            <span11>3</span11>
            <div class='circle'></div>
            <span10>3</span10>
          </div>
        </div>
        </div>
      </body>
    )
  }
}

export default Notes;
