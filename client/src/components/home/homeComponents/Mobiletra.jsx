import React, { useEffect, useState } from "react";
import "../home.css";

export default function Mobiletra() {
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/item/getItems')
      .then(res => res.json())
      .then(data => 
        setItem(data)
      )
      .catch(error => console.log(error))
  }, []);

  return (
    <div className="mob-tra">
      <div className="mob-tra-img">
        <img
          src="https://m.media-amazon.com/images/I/619f09kK7tL._SX679_.jpg"
          alt=""
        />
        <h5>1st Mobile</h5>
      </div>
      <div className="mob-tra-img">
        <img
          src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/f/n/u/-original-imagx9egm9mgmvab.jpeg?q=70&crop=false"
          alt=""
        />
        <h5>2nd Mobile</h5>
      </div>
      <div className="mob-tra-img">
        <img
          src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/b/p/s/-original-imaggsuemmztbghp.jpeg?q=70&crop=false"
          alt=""
        />
        <h5>3rd Mobile</h5>
      </div>
      <div className="mob-tra-img">
        <img
          src="https://m.media-amazon.com/images/I/618hqM-yxtL._SX679_.jpg"
          alt=""
        />
        <h5>4th Mobile</h5>
      </div>
      <div className="mob-tra-img">
        <img
          src="https://m.media-amazon.com/images/I/61LI5G00UNL._SX679_.jpg"
          alt=""
        />
        <h5>5th Mobile</h5>
      </div>
      <div className="mob-tra-img">
        <img
          src="https://m.media-amazon.com/images/I/819sWoSDFRL._SX679_.jpg"
          alt=""
        />
        <h5>6th Mobile</h5>
      </div>
    </div>
  );
}
