import React from "react";
import "../css/landpage.css";
import mobile from "../Images/mobile-phone.jpg";
import laptop from "../Images/laptops.PNG";
import camera from "../Images/cameras.PNG";
import grocery from "../Images/groceries.PNG";
import essentials from "../Images/essentials.PNG";
import vegetables from "../Images/vegetables-fruits.PNG";
import casuals from "../Images/casuals.PNG";
import formals from "../Images/formals.PNG";
import sports from "../Images/sports.PNG";
class Categories extends React.Component {
  render() {
    return (
      <div>
        <div class="button-row">
          <div class="category-button">
            <button>Electronics</button>
          </div>
          <div class="category-button">
            <button>Groceries</button>
          </div>
          <div class="category-button">
            <button>Fashion</button>
          </div>
        </div>
        <div id="category-box">
          <div class="category-details">
            <div class="category-name">
              <h2>Electronics</h2>
            </div>
            <div class="item-row">
              <div class="display-box">
                <img class="item-img" src={mobile} alt="mobile" />
              </div>
              <div class="display-box">
                <img class="item-img" src={laptop} alt="laptop" />
              </div>
              <div class="display-box">
                <img class="item-img" src={camera} alt="camera" />
              </div>
            </div>
          </div>

          <div class="category-details">
            <div class="category-name">
              <h2>Groceries</h2>
            </div>
            <div class="item-row">
              <div class="display-box">
                <img class="item-img" src={grocery} alt="grocery" />
              </div>
              <div class="display-box">
                <img class="item-img" src={essentials} alt="essentials" />
              </div>
              <div class="display-box">
                <img class="item-img" src={vegetables} alt="vegfruits" />
              </div>
            </div>
          </div>

          <div class="category-details">
            <div class="category-name">
              <h2>Fashion</h2>
            </div>
            <div class="item-row">
              <div class="display-box">
                <img class="item-img" src={casuals} alt="casuals" />
              </div>
              <div class="display-box">
                <img class="item-img" src={formals} alt="formals" />
              </div>
              <div class="display-box">
                <img class="item-img" src={sports} alt="sportss" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Categories;
