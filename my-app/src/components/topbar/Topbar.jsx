import React, { useContext } from "react";
import "./topbar.css";
import { Search, Person, Home, Login } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export default function Topbar() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Secret Recipes</span>
        </Link>
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
          <Link to={"/profile/:userId"} className="topbarIconItem">
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
