import React from 'react';
import './navbarFinal/navbarFinal.css';

class PdfView extends React.Component {
  render() {
    return(
      <div>
      <div>
        <ul className="ul">
        	<li className="li" id="title">OpenNotes</li>
        	<li className="li" id="search">
        		<form method="post">
        		  <input type="text" class="textbox" placeholder="Search"/>
        		  <input title="Search" value=":)" type="submit" class="button" style={{marginTop:"-0.05em"}}></input>
        		</form>
            </li>

        	<div id="menu-items">

        		<li className="li"><a href="#" className="signUp" style={{color: "white", fontWeight: "200"}}>Sign Up</a></li>
        		<li className="li"><a href="#" class="logIn" style={{color: "white", fontWeight: "200"}}>Log In</a></li>
        		<li className="li"><a href="#" class="contact">Courses</a></li>
        		<li className="li"><a href="#" class="about">About</a></li>

        	</div>
        </ul>
      </div>
      <div class ='container-fluid' style={{position: "relative"}}>
        <div class ='pdf' style={{position:"absolute", top:"0", left:"0"}}>
          <center>
            <iframe src={"./logo.svg"} style={{marginBsottom: "60px", width:'1130', height: "470"}}></iframe>
          </center>
        </div>
        <center>
      <div class='overlap_menu' style={{position: "absolute", top:"0", left:"0"}}>hii</div></center>
    </div>
  </div>
    )
  }
}

export default PdfView;
