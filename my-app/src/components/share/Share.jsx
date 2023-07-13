import { useState } from "react";
import Entry from "./Entry";
import "./share.css";
import { PermMedia, Room } from "@mui/icons-material";

const Share = () => {
  const [selectedEntry, setSelectedEntry] = useState({});

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/Portrait.jpg" alt="" />
          <Entry data={selectedEntry} className="shareInput" />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
          </div>
          <button className="shareButton">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Share;
