import { useState, useEffect } from "react";
import axios from "axios";
import "./post.css";
import { format } from "timeago.js";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    // console.log(post);
    const fetchUser = async () => {
      const res = await axios.get(`/users?userId=${post.userId}`);
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`profile/${user.email}`}>
              <img
                className="postProfileimg"
                src={user.profilePicture || PF + "person-icon.png"}
                alt=""
              />
            </Link>
            <span className="postUsername">{user.email}</span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
        </div>
        <div className="postCenter">
          <div className="postText">{post?.title}</div>
          <div className="postText">{post?.ingredients}</div>
          <div className="postText">{post?.desc}</div>
          <div className="postText">{post?.difficulty}</div>
          <div className="postText">{post?.duration}</div>
          <img className="postImg" src={PF + post.img} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src={`${PF}like.jpeg`}
              alt=""
              onClick={likeHandler}
            />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight"></div>
        </div>
      </div>
    </div>
  );
}
