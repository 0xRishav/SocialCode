import React from "react";
import "./Livechat.css";

function Livechat() {
  const fakeChat = [
    {
      name: "Charlotte Townsend",
      time: "10m",
      chat: "oh my gosh! that was insane",
      profileImage:
        "https://images.unsplash.com/photo-1594030546818-b2636c8501dd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
    },
    {
      name: "Etta Carson",
      time: "7m",
      chat: "😄🥳🎉",
      profileImage:
        "https://images.unsplash.com/photo-1612195352923-006673e43f27?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Loize Gonzalase",
      time: "5m",
      chat: "He should hold the finger of person nearby",
      profileImage:
        "https://images.unsplash.com/photo-1553867745-6e038d085e86?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=513&q=80",
    },
    {
      name: "Mollie Swangon",
      time: "1m",
      chat: "oh my gosh! that was insane",
      profileImage:
        "hhttps://images.unsplash.com/photo-1556094896-23de9115a14d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Mollie Swangon",
      time: "1m",
      chat: "oh my gosh! that was insane",
      profileImage:
        "hhttps://images.unsplash.com/photo-1556094896-23de9115a14d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Mollie Swangon",
      time: "1m",
      chat: "oh my gosh! that was insane",
      profileImage:
        "hhttps://images.unsplash.com/photo-1556094896-23de9115a14d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
  ];
  return (
    <div className="Livechat">
      <h4 className="Livechat__heading">Live chat</h4>
      {fakeChat.map((chat) => (
        <div className="Livechat__chatWrapper">
          <p style={{ fontSize: "10px", opacity: "0.5", marginBottom: "4px" }}>
            {chat.time}
          </p>
          <div className="Livechat__imageNameWrapper">
            <img
              src={chat.profileImage}
              alt="pp"
              className="Livechat__chatImage"
            />
            <h4 className="Livechat__name">{chat.name}</h4>
          </div>
          <p className="Livechat__chatText">{chat.chat}</p>
        </div>
      ))}
      <div className="Livechat__chatInputWrapper">
        <textarea
          className="Livechat__textArea"
          placeholder="Type..."
          rows="1"
        ></textarea>
        <h5>send</h5>
      </div>
    </div>
  );
}

export default Livechat;
