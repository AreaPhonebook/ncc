import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  // const root = document.getElementById("root");
  // console.log(root);

  const parentHomePage = document.getElementsByTagName("ParentHomePage");
  console.log(parentHomePage);

  let [state, setState] = useState({ clicked: false });
  const handleClick = () => {
    setState({ clicked: !state.clicked });

    //
    console.log("background blur");
    parentHomePage.style = "filter: blur(3px)";
    //
  };

  return (
    <nav className="NavbarItems">
      <div onClick={handleClick} className="menu-icons">
        <i
          className={state.clicked ? "fas fa-times" : "fas fa-bars burgerMenu"}
        ></i>
      </div>
      <ul className={state.clicked ? "nav-menu active" : "nav-menu"}>
        <li className="nav-link">
          <Link className="img-span-flex">
            <img
              className="logo-png"
              src="https://areaphonebook.github.io/area-phonebook/resources/icons/shop.png"
              alt=""
            />
            <span>Food</span>
          </Link>
        </li>
        <li className="nav-link">
          <Link className="img-span-flex">
            <img
              className="logo-png"
              src="https://areaphonebook.github.io/area-phonebook/resources/icons/shop.png"
              alt=""
            />
            <span>Shop</span>
          </Link>
        </li>
        <li className="nav-link">
          <Link className="img-span-flex">
            <img
              className="logo-png"
              src="https://areaphonebook.github.io/area-phonebook/resources/icons/shop.png"
              alt=""
            />
            <span>Rental</span>
          </Link>
        </li>
        <li className="nav-link">
          <Link className="img-span-flex">
            <img
              className="logo-png"
              src="https://areaphonebook.github.io/area-phonebook/resources/icons/shop.png"
              alt=""
            />
            <span>Education</span>
          </Link>
        </li>
        <li className="nav-link">
          <Link className="img-span-flex">
            <img
              className="logo-png"
              src="https://areaphonebook.github.io/area-phonebook/resources/icons/shop.png"
              alt=""
            />
            <span>Health</span>
          </Link>
        </li>
        <li className="nav-link">
          <Link className="img-span-flex">
            <img
              className="logo-png"
              src="https://areaphonebook.github.io/area-phonebook/resources/icons/shop.png"
              alt=""
            />
            <span>Works</span>
          </Link>
        </li>
        <li className="nav-link">
          <Link className="img-span-flex">
            <img
              className="logo-png"
              src="https://areaphonebook.github.io/area-phonebook/resources/icons/shop.png"
              alt=""
            />
            <span>Info</span>
          </Link>
        </li>
      </ul>
      <h1 className="area">
        Area Phonebook <sup className="ncc">NCC</sup>
      </h1>
      <h1 className="logo">
        <i className=" fa-solid fa-user"></i>
      </h1>
    </nav>
  );
};

export default NavBar;
