import React, { useEffect } from "react";
import "./Posts.css";

import Post from "../Post/Post";
import { useDispatch, useSelector } from "react-redux";
import { getTimeLinePosts } from "../../actions/postAction";

const Posts = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  let { posts, loading } = useSelector((state) => state.postReducer);

  console.log("posts",posts)

  useEffect(() => {
    dispatch(getTimeLinePosts(user._id));
  }, []);
  return (
    <div className="Posts">
      {loading
        ? "Fetching Posts..."
        : posts.map((post, id) => {
            return <Post key={id} data={post} />;
          })}
    </div>
  );
};

export default Posts;
