import React from 'react';
import './navbarFinal/navbarFinal.css';

class PdfView extends React.Component {
  render() {
    return(
      <div>
        <ul>
        	<li id="title">OpenNotes</li>
        	<li id="search">
        		<form method="post">
        		  <input type="text" class="textbox" placeholder="Search"/>
        		  <button title="Search" value=":)" type="submit" class="button"></button>
        		</form>
            </li>

        	<div id="menu-items">

        		<li><a href="#" className="signUp" style={{color: "white", fontWeight: "200"}}>Sign Up</a></li>
        		<li ><a href="#" class="logIn" style={{color: "white", fontWeight: "200"}}>Log In</a></li>
        		<li><a href="#" class="contact">Courses</a></li>
        		<li><a href="#" class="about">About</a></li>

        	</div>
        </ul>
      </div>
    )
  }
}

export default PdfView;
