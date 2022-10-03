import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="heading">
        <h4>What do you need help with?</h4>
        <h5>choose from an option below</h5>
      </section>
      <div className="form">
        <Link to="/new-ticket" className="btn btn-reverse btn-block">
          create new ticket
        </Link>
        <Link to="/tickets" className="btn btn-block">
          view my tickets
        </Link>
      </div>
    </>
  );
}

export default Home;
