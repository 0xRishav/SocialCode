import React from "react";
import "./NotificationUser.css";
import { IoMdNotifications } from "react-icons/io";

function NotificationUser() {
  const DummyUser = {
    name: "Nikhil sharma",
    profileImage:
      "https://images.unsplash.com/photo-1556094896-23de9115a14d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    userName: "nikhilsharma",
  };
  return (
    <div className="NotificationUser">
      <div className="NotificationUser__iconContainer">
        <IoMdNotifications />
      </div>
      <div className="NotificationUser__userInfo">
        <div className="NotificationUser__userInfoProfileWrapper">
          <div className="NotificationUser__nameWrapper">
            <p>{DummyUser.name}</p>
            <p>@{DummyUser.userName}</p>
          </div>
          <div className="NotificationUser__imagewrapper">
            <span className="NotificationUser__activeSpan"></span>
            <img
              className="NotificationUser__profileImage"
              src={DummyUser.profileImage}
              alt="profilepic"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotificationUser;
