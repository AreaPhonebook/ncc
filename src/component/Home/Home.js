import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <Link className="createAnAccountButton">
        <i class="fa-solid fa-user"></i>
        <button>Create an Account</button>
      </Link>
    </div>
  );
};

export default Home;
