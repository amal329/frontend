import React from "react";
import "../css/landpage.css";
import logo from "../Images/ecommerce-logo.jpg";
import banner from "../Images/banner.png";
class Header_baner extends React.Component {
  render() {
    return (
      <div class="first">
        <div class="header">
          <div id="logoblock">
            <img id="logo" src={logo} alt="logo" />
          </div>
          <div id="loginblock">
            <button
              onclick="C:/Users/ADMIN/mygit/myrepo2021/Day%202/basicWebpage/store.html"
              id="login"
            >
              Log In
            </button>
          </div>
        </div>
        <div class="banner">
          <img id="banner-image" src={banner} alt="banner" />
        </div>
      </div>
    );
  }
}
export default Header_baner;
