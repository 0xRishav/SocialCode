import React from "react";
import { Livechat } from "../../components";
import NotificationUser from "../../components/notification-user/NotificationUser";
import "./LivechatContainer.css";

function LivechatContainer() {
  return (
    <div className="LivechatContainer">
      <NotificationUser />
      <Livechat />
    </div>
  );
}

export default LivechatContainer;
