import React from "react";
import ChatInput from "./ChatInput";
import MessageList from "./MessageList";

const Homepage = () => {
  return (
    <main>
      {/* MessageList */}
      <MessageList/>
      {/* ChatInput */}
      <ChatInput/>
    </main>
  );
};

export default Homepage;
