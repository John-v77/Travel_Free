import React, { useEffect, useState } from "react";
import "./navbar.css";
import { Link, useHistory } from "react-router-dom";
import TheContext from "../TheContext";
import actions from "../api";
import Login from "./Login";
import axios from "axios";

function Navbar(props) {
  const [user, setUser] = useState({});
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    actions
      .getUser()
      .then((res) => {
        setUser(res.data);
      })
      .catch(console.error);
  }, []);

  const history = useHistory();

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const postSearch = async (e) => {
    // send the post to data base
    e.preventDefault();
    let res = await actions.searchItems(searchInput);
    console.log(res.data);
    props.setCosasInNavBar(res.data);
    history.push("/search");
  };

  return (
    <>
      {/* /  Nav Bar */}

      <div id="Navbar">
        <div style={{ width: "26" }}></div>
        <div class="logo">
          <h3>WhyNew!</h3>
        </div>
        <div class="login">
          <div>
            <Login />
          </div>
          <div className="search-css">
            <form onSubmit={postSearch}>
              <input
                onChange={handleChange}
                type="text"
                class="searchItems"
                placeholder=" ...search"
              />
              <button type="submit" class="searchButton">
                <i style={{ color: "black" }} class="fa fa-search"></i>
              </button>
            </form>
            
              <Link to="/shopingCart">
                <button
                  style={{ width: "3vw", height: "1.8vw", margin: "0 10px" }}
                >
                  <i
                    class="fa fa-shopping-cart"
                    style={{ fontSize: "1.2em" }}
                  ></i>
                </button>
              </Link>
            
          </div>
        </div>
      </div>

      <div className="nav-buttons">
        <Link to="/">
          <b><u>Home</u></b>
        </Link>
        <Link to="/storeFrontDesk">
          <b><u>All Items</u></b>
        </Link>
        <Link to="/add-items">
          <b><u>Add Item</u></b>
        </Link>
      </div>
    </>
  );
}

export default Navbar;
