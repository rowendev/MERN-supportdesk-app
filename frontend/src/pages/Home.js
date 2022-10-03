import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/coffee_break.svg";

function Home() {
  return (
    <>
      <section className="heading">
        <h4>What do you need help with?</h4>
        <h5>choose from an option below</h5>
      </section>
      <img src={img1} alt="image" style={{ width: "300px", height: "200px" }} />
      <div className="form">
        <Link to="/new-ticket" className="btn btn-reverse btn-block">
          建立新的工程維修單
        </Link>
        <Link to="/tickets" className="btn btn-block">
          檢視目前維修單
        </Link>
      </div>
    </>
  );
}

export default Home;
