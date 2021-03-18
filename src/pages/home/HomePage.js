import React from "react";
import { CreatePost, Post } from "../../components";
import "./HomePage.css";
import { LivechatContainer } from "../../containers";

function HomePage() {
  return (
    <div className="HomePage">
      {/* <div style={{ display: "flex", alignItems: "center", padding: "100px" }}>
        <MenuPeopleCont />
        <div
          className="createPost-post-wrapper"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <CreatePost />
          <Post />
        </div>
        <div
          style={{ width: "150px", height: "700px", background: "black" }}
        ></div>
      </div> */}
      <LivechatContainer />
    </div>
  );
}

export default HomePage;
