import React from "react";
import "./home.css";
import Banner from "./homeComponents/Banner";
import Mobiletra from "./homeComponents/Mobiletra";

export default function Home() {
  return (
    <div className="body">
      <div className="home-body">

        <div className="category">
          <div className="cate-item">
            <img
              src="https://rukminim2.flixcart.com/flap/80/80/image/22fddf3c7da4c4f4.png?q=100"
              alt=""
            />
            <h5>Mobile</h5>
          </div>
          <div className="cate-item">
            <img
              src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100"
              alt=""
            />
            <h5>Fashion</h5>
          </div>
          <div className="cate-item">
            <img
              src="https://rukminim2.flixcart.com/flap/80/80/image/69c6589653afdb9a.png?q=100"
              alt=""
            />
            <h5>Electronics</h5>
          </div>
          <div className="cate-item">
            <img
              src="https://rukminim2.flixcart.com/flap/80/80/image/ab7e2b022a4587dd.jpg?q=100"
              alt=""
            />
            <h5>Home & Furniture</h5>
          </div>
          <div className="cate-item">
            <img
              src="https://rukminim2.flixcart.com/flap/80/80/image/dff3f7adcf3a90c6.png?q=100"
              alt=""
            />
            <h5>Beauty</h5>
          </div>
        </div>

        <div className="ads">
          <Banner />
        </div>

        <div className="mobile">
          <h3 style={ { marginLeft: "20px", marginTop: "10px" }} >Best of Mobile</h3>
          <div className="mob">
            <Mobiletra />
          </div>
        </div>

        <div className="fashion">
          <h1>this is fashion section</h1>
        </div>
        <div className="electronics">
          <h1>this is electronics section</h1>
        </div>
        <div className="home">
          <h1>this is home & furniture section</h1>
        </div>
        <div className="beauty">
          <h1>this is beauty section</h1>
        </div>
      </div>
    </div>
  );
}
