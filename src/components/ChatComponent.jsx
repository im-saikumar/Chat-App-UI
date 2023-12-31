import React, { useEffect, useRef, useState } from "react";
import Loader from "./loader";

const ChatComponent = () => {
  const [imessage, setImessage] = useState([{ bot: true, message: "How I can assist you with ? " }]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false)


  const scrollToBottom = () => {
    const chatContainer = document.getElementById("chat-container");
    if(chatContainer){
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [imessage]);

  function send() {
    if(text !== "") {
    setImessage((prev) => [...prev,{bot: false,message: text,}]);
    setText("");
    setLoading(true)
    
    fetch(`http://127.0.0.1:8000/genai/chat?user_query=${text}`, {
      method: "POST", // or 'PUT'
      headers: { "Content-Type": "application/json" },
      // body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setImessage((prev) => [...prev,{bot: true,message: data.answer,}]);
        setLoading(false) 
      })
      .catch((err) => console.log(err));
    }
  }

  function pressEnter(e){
    if (e.key === 'Enter') send()
  }

  const Chatmessage = function ({ msg }) {
    const bot = msg.bot;
    return (
      <div
        style={{
          display: "flex",
          flexDirection: !bot ? "row" : "row-reverse",
        }}
      >
        <div style={{margin: '15px 5px 0px'}}>{bot ? ": 🤖" : "🙎‍♂️ :" }</div>
        <div
          className={`font-white ${bot ? "bg-highlight font-white" : "bg-highlight2 font-white" }`}
          style={{
            // flex:1,
            minHeight: "5vh",
            minWidth: "10vh",
            maxWidth: "90%",
            padding: "8px 15px",
            borderRadius: bot ? "8px 8px 0 8px" : "8px 8px 8px 0",
            margin: "5px",
          }}
        >
          {/* <p style={{ margin: 0, fontSize: "large" }}>
            {bot ? "🤖" : "🕴"} :
          </p> */}
          <p style={{ margin: 0 }}>{msg.message}</p>
        </div>
        <div style={{ flex: 2 }}></div>
      </div>
    );
  };

  return (
    <div>
      <div id="chat-container"  className="bg-chat-window" style={{ height: "86vh", margin: "1%" , overflowY: "auto", }}>
        {/* <div
          className="bg-chat-window"
          style={{
            height: "5vh",
            padding: "1.2vh 2vh",
            borderRadius: "8px",
            margin: "10px 0",
          }}
        > 
        </div> */}
        {imessage.map((msg) => <Chatmessage msg={msg} />)}
        {loading && <Loader/>}
      </div>

      <div style={{ display: "flex", margin: "0 1%" }}>
        <input
          placeholder="Type your message here"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => pressEnter(e)}
          style={{
            flex: 1,
            height: "4vh",
            color: "black",
            padding: "15px",
            borderRadius: "8px",
            marginRight: "5px",
            border: "1px solid white",
          }}
        />
        <button
          className="bg-highlight font-white"
          style={{
            padding: "8px 20px",
            border: "none",
            height: "4vh",
            borderRadius: "5px",
          }}
          onClick={send}
          type="submit"
        >
          ➡🔍
        </button>
      </div>
    </div>
  );
};

export default ChatComponent;
