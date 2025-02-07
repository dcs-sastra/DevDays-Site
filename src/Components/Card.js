import React from "react";
import "./css/Card.css";
function Card() {
  return (
    <div className="box">
      <div className="Card">
        <div className="cardbody">
          <img
            src="https://images.pexels.com/photos/29353714/pexels-photo-29353714/free-photo-of-wild-yellow-flower-in-a-grassy-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Profile Pic"
          />
          <div className="carddetail">
            <h5 className="cardtitle">Event</h5>
            <div className="cardtext">
              <p>Date</p>
              <p>Time</p>
            </div>
          </div>
        </div>
        <button className="card-button">Contact</button>
      </div>
    </div>
  );
}

export default Card;
