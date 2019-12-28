import "./header.css";
import "./site.css";
import React from "react"
import gmail from "../../content/assets/gmail.png"
import twitter from "../../content/assets/twitter.png"
import linkedin from "../../content/assets/linkedin.png"
import github from "../../content/assets/github.png"
import profilePic from "../../content/assets/wonderley-profile-circle.png"
const Header = () => {
  return (
    <header id="main-header">
      <div id="grid-container">
        <div id="lucas-img-container">
          <img id="lucas-img" src={profilePic} alt="Lucas Wonderley"/>
        </div>
        <div id="name-text">
          <h1>Lucas Wonderley</h1>
          <h2 id="inline-subheader">Software Developer</h2>
        </div>
        <div id="subheader">
          <h2>Software Developer</h2>
        </div>
        <div id="gmail" class="icon icon-center-mobile">
          <a href="mailto:lucas.r.wonderley@gmail.com">
            <img src={gmail}/>
          </a>
        </div>
        <div id="twitter" class="icon icon-center-mobile">
          <a href="https://twitter.com/LucasWonderley" target="_blank" rel="noopener noreferrer">
            <img src={twitter}/>
          </a>
        </div>
        <div id="linkedin" class="icon icon-center-mobile">
          <a href="https://linkedin.com/in/lucas-wonderley-660474b/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin}/>
          </a>
        </div>
        <div id="github" class="icon icon-center-mobile">
          <a href="https://github.com/wonderley" target="_blank" rel="noopener noreferrer">
            <img src={github}/>
          </a>
        </div>
      </div>
    </header>
  );
};
export default Header;

