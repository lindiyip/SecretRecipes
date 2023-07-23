import { useState, useEffect } from "react";
import axios from "axios";
import "./feed.css";
import Post from "../post/Post";

export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const res = username
      ? await axios.get("/posts/allposts/" + username)
      : await axios.get("/posts");
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, [username]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
}
