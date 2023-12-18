import React, { useState } from "react";

const ChatComponent = () => {
  const [imessage, setImessage] = useState([{ bot: true, message: "hello" }]);
  const [text, setText] = useState("");

  function send() {
    setImessage((prev) => [
      ...prev,
      {
        bot: false,
        message: text,
      },
    ]);
    setText("");
  }

  const Chatmessage = function ({ msg }) {
    const bot = msg.bot;
    return (
      <div
        style={{
          display: "flex",
          flexDirection: bot ? "row" : "row-reverse",
        }}
      >
        <div
          className={`font-white ${bot ? "bg-primary" : "bg-card font-black"}`}
          style={{
            // flex:1,
            minHeight: "5vh",
            minWidth: "10vh",
            maxWidth: "50vh",
            padding: "8px 15px",
            borderRadius: bot ? "8px 8px 8px 0" : "8px 8px 0 8px",
            margin: "5px 0",
          }}
        >
          <p style={{ margin: 0, fontSize: "smaller" }}>
            {bot ? "bot" : "me"} :
          </p>
          <p style={{ margin: 0 }}>{msg.message}</p>
        </div>
        <div style={{ flex: 2 }}></div>
      </div>
    );
  };

  return (
    <div>
      <div style={{ height: "86vh", margin: "1%" }}>
        <div
          className="bg-card"
          style={{
            height: "5vh",
            padding: "1.2vh 2vh",
            borderRadius: "8px",
            margin: "10px 0",
          }}
        >
          {" "}
          user name
        </div>
        {imessage.map((msg) => (
          <Chatmessage msg={msg} />
        ))}
      </div>
      <div style={{ display: "flex", margin: "0 1%" }}>
        <input
          placeholder="Type your message here"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{
            flex: 1,
            height: "4vh",
            padding: "15px",
            borderRadius: "8px",
            marginRight: "5px",
            border: "1px solid #497173"
          }}
        />
        <button
          className="bg-primary font-white"
          style={{
            padding: "8px 20px",
            border: "none",
            height: "4vh",
            borderRadius: "5px",
          }}
          onClick={send}
          type="submit"
        >
          send
        </button>
      </div>
    </div>
  );
};

export default ChatComponent;
