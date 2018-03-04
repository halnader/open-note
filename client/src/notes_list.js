import React from 'react';
import './notes.css';

class Notes extends React.Component {
  render(){
    return(
      <body>
        <div class="header"><div class='h1'>OpenNotes</div></div>
        <span3><div class='search_bar'></div></span3>
        <span12><div class='search'></div></span12>
        <span4>About</span4>
        <span5>Courses</span5>
        <span6><div class="login"><center>Login</center></div></span6>
        <span7><div class="sign_up"><center>Sign Up</center></div></span7>
        <hr/>
        <br/>
        <div class='h3'>New Notes</div>
        <br/>
        <div class='notes'>
        <div class='notes_1'>
          <div class='h2'> Lecture 3 Notes</div>
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
          <div class='h2'>Lecture 3 Notes</div>
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
          <div class='h2'>Marginal Cost</div>
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
          <div class='h2'>Lecture 4 Notes</div>
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
          <div class='h2'>Mar 11-Bitcoin</div>
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
