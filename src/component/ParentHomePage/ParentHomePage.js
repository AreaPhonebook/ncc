import React from "react";
import "./ParentHomePage.css";
import { Link, Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Home from "../Home/Home";

const ParentHomePage = () => {
  return (
    <div id="parentHomePage">
      <NavBar></NavBar>
      <div id="parent-home-page-child-div">
        <img
          className="parentHomePage-bannerImg"
          src="https://jornalcobaia.com.br/wp-content/uploads/2022/04/alfons-morales-YLSwjSy7stw-unsplash-624x275.jpg"
          alt=""
        />

        <div className="parentHomePage-links-div ">
          <Link className="commonLink" to="home">
            Home
          </Link>
          <Link className="commonLink" to="status">
            Status
          </Link>
          <Link className="commonLink" to="forum">
            Forum
          </Link>
        </div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default ParentHomePage;
