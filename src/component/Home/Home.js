import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="homeUi" id="homeUi">
      <Link className="createAnAccountButton">
        <i className="fa-solid fa-user"></i>
        <button>Create an Account</button>
      </Link>
      <div className="home-parent-cart-div">
        <div className="home-single-cart-parent-div">
          <span className="featured">Featured</span>
          <div className="home-single-cart-div">
            <img
              className="home-cart-photo"
              src="https://i0.wp.com/www.entrepreneurs.ng/wp-content/uploads/2022/04/How-to-write-a-company-profile.jpg?fit=1200%2C675&ssl=1"
              alt=""
            />
            <div className="home-cart-text-div">
              <h2 className="companyName">
                Company Name <sup className="sup-open">Open</sup>
              </h2>
              <div className="location-rating-div">
                <span className="location-span">
                  <i className="fa-solid fa-location-dot"></i>
                  <span>Location Address</span>
                </span>
                <span className="rating-span">
                  <i className="fa-solid fa-star"></i>
                  <span>4.8 Rating</span>
                </span>
              </div>
            </div>

            <div className="home-i-div">
              <i className="fa-solid fa-phone"></i>
            </div>
          </div>
        </div>
        <div className="home-single-cart-parent-div">
          <span className="Top1inAPB">Top # 1 in APB</span>
          <div className="home-single-cart-div border-second">
            <img
              className="home-cart-photo"
              src="https://i0.wp.com/www.entrepreneurs.ng/wp-content/uploads/2022/04/How-to-write-a-company-profile.jpg?fit=1200%2C675&ssl=1"
              alt=""
            />
            <div className="home-cart-text-div">
              <h2 className="companyName">
                Company Name <sup className="sup-open">Open</sup>
              </h2>
              <div className="location-rating-div">
                <span className="location-span">
                  <i className="fa-solid fa-location-dot"></i>
                  <span>Location Address</span>
                </span>
                <span className="rating-span">
                  <i className="fa-solid fa-star"></i>
                  <span>4.8 Rating</span>
                </span>
              </div>
            </div>

            <div className="home-i-div">
              <i className="fa-solid fa-phone"></i>
            </div>
          </div>
        </div>
        <div className="home-single-cart-parent-div">
          <div className="home-single-cart-div border-three">
            <img
              className="home-cart-photo"
              src="https://i0.wp.com/www.entrepreneurs.ng/wp-content/uploads/2022/04/How-to-write-a-company-profile.jpg?fit=1200%2C675&ssl=1"
              alt=""
            />
            <div className="home-cart-text-div">
              <h2 className="companyName">
                Company Name <sup className="sup-open">CLOSE</sup>
              </h2>
              <div className="location-rating-div">
                <span className="location-span">
                  <i className="fa-solid fa-location-dot"></i>
                  <span>Location Address</span>
                </span>
                <span className="rating-span">
                  <i className="fa-solid fa-star"></i>
                  <span>4.8 Rating</span>
                </span>
              </div>
            </div>

            <div className="home-i-div">
              <i className="fa-solid fa-phone"></i>
            </div>
          </div>
        </div>
        <div className="home-single-cart-parent-div">
          <div className="home-single-cart-div border-three">
            <img
              className="home-cart-photo"
              src="https://i0.wp.com/www.entrepreneurs.ng/wp-content/uploads/2022/04/How-to-write-a-company-profile.jpg?fit=1200%2C675&ssl=1"
              alt=""
            />
            <div className="home-cart-text-div">
              <h2 className="companyName">
                Company Name <sup className="sup-open">Open</sup>
              </h2>
              <div className="location-rating-div">
                <span className="location-span">
                  <i className="fa-solid fa-location-dot"></i>
                  <span>Location Address</span>
                </span>
                <span className="rating-span">
                  <i className="fa-solid fa-star"></i>
                  <span>4.8 Rating</span>
                </span>
              </div>
            </div>

            <div className="home-i-div">
              <i className="fa-solid fa-phone"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
