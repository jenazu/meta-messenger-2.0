"use client";
import { create } from "domain";
import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { Message } from "../typings";

function ChatInput() {
  const [input, setInput] = useState("");

  const addMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) return;

    const messageToSend = input;
    setInput("");
    const id = uuid();
    const message: Message = {
      id,
      message: messageToSend,
      created_at: Date.now(),
      username: "nghia",
      profilePic:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F603200943828894851%2F&psig=AOvVaw2s01T0n-3Igyo7KDgeV-5V&ust=1669457312214000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLj7tqKLyfsCFQAAAAAdAAAAABAE",
      email: "nghiacn1996@gmail.com",
    };

    const uploadMessageToUpstash = async () => {
      const res = await fetch("/api/addMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });
      const data = await res.json();
    };
  };

  return (
    <form
      onSubmit={addMessage}
      className="flex fixed bottom-0 z-50 w-full px-10 py-5 space-x-2 border-t border-gray-100"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter message here..."
        className="flex-1 rounded 
      border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent
      px-5 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
      />
      <button
        type="submit"
        disabled={!input}
        className="bg-blue-500 hover:bg-blue-700 text-white 
        font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Send
      </button>
    </form>
  );
}

export default ChatInput;
