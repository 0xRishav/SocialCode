import React from "react";
import { CreatePost, Post } from "../../components";
import "./PostCreatePostContainer.css";

function PostCreatePostContainer() {
  return (
    <div className="PCPC">
      <h1 style={{ alignSelf: "flex-start", margin: "16px" }}>
        Welcome back, Nikhil!
      </h1>
      <CreatePost />
      <Post />
    </div>
  );
}

export default PostCreatePostContainer;
