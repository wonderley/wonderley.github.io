import "./header.css";
import React from "react"
import gmail from "../../content/assets/gmail.png"
import twitter from "../../content/assets/twitter.png"
import linkedin from "../../content/assets/linkedin.png"
import github from "../../content/assets/github.png"
import profilePic from "../../content/assets/wonderley-profile-circle.png"
const Header = () => {
  return (
    <header id="header">
      <a href="/">
        <div id="header-container">
          <div id="lucas-img-container">
            <img id="lucas-img" src={profilePic} alt="Lucas Wonderley"/>
          </div>
          <div class="header-subheader">
            <h1>Lucas Wonderley</h1>
            <div class="subheader">Software Developer</div>
          </div>
        </div>
      </a>
      <div id="contact-icon-container">
        <div>
          <a href="mailto:lucas.r.wonderley@gmail.com">
            <img src={gmail}/>
          </a>
        </div>
        <div>
          <a href="https://twitter.com/LucasWonderley" target="_blank">
            <img src={twitter}/>
          </a>
        </div>
        <div>
          <a href="https://linkedin.com/in/lucas-wonderley-660474b/" target="_blank">
            <img src={linkedin}/>
          </a>
        </div>
        <div>
          <a href="https://github.com/wonderley" target="_blank">
            <img src={github}/>
          </a>
        </div>
      </div>
    </header>
  );
};
export default Header;

