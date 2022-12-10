import React from "react";
import { Messages } from "../typings";
import ChatInput from "./ChatInput";
import MessageList from "./MessageList";
import { unstable_getServerSession } from "next-auth/next";
import { Providers } from "./providers";

const Homepage = async () => {
  const data = await fetch(
    `${process.env.APP_URL || "http://localhost:3000"}/api/getMessages`
  ).then((res) => res.json());

  const messages: Messages = data.messages;

  const session = await unstable_getServerSession();
  return (
    <Providers session={session}>
      <main>
        {/* MessageList */}
        <MessageList initialMessages={messages} />
        {/* ChatInput */}
        <ChatInput session={session} />
      </main>
    </Providers>
  );
};

export default Homepage;
