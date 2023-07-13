import React from "react";
import "./topbar.css";
import { Search, Person, Home, Login } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Secret Recipes</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input placeholder="Search for recipes" className="searchinput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLink">
          <Link to={"/"} className="topbarLink">
            <Home />
          </Link>
        </div>
        <div className="topbarIcons">
          <Link to={"/profile"} className="topbarIconItem">
            <Person />
          </Link>
        </div>
        <div className="topbarIcons">
          <Link to={"/login"} className="topbarIconItem">
            <Login />
          </Link>
        </div>
        <img src="/assets/Portrait.jpg" alt="" className="topbarImg" />
      </div>
    </div>
  );
}
