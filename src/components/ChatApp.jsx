import React, { useState } from "react";
import Header from "./Header";
import SidebarComponent from "./sidebarComponent";
import ChatComponent from "./ChatComponent";


const ChatApp = () => {

  return (
    <>
      <Header />
      <div className="bg-secondary flex">
        <SidebarComponent />

        <div className="bg-primary" style={{ width: "100%", height: "95vh" }}>
          <ChatComponent/>
        </div>

        <div
          className="bg-sidebar-window"
          style={{ width: "40vh", height: "95vh" }}
        ></div>
      </div>
    </>
  );
};

export default ChatApp;
