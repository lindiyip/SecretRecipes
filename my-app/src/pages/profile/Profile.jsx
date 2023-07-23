import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./profile.css";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useContext(AuthContext);
  console.log(user);
  // const [user, setUser] = useState({});
  // const userId = useParams().userId;

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const res = await axios.get(`/users?email=${userId}`);
  //     setUser(res.data);
  //   };
  //   fetchUser();
  // }, [user]);

  return (
    <>
      <Topbar />
      <div className="profile">
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className=" profileCoverImg"
                src={user.coverPicture || PF + "cooking-bg.jpeg"}
                alt=""
              />
              <img
                className=" profileUserImg"
                src={user.profilePicture || PF + "person-icon.png "}
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.email}</h4>
              <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={user._id} />
            {/* <Feed username="64b7fd32c62179e6f04f13c1" /> */}
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
}
