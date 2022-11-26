"use client";
import React, { useEffect } from "react";
import useSWR from "swr";
import { Message, Messages } from "../typings";
import fetcher from "../utils/fetchMessages";
import { clientPusher } from "../utils/pusher";
import MessageComponent from "./MessageComponent";

type Props = {
  initialMessages: Messages
}

function MessageList({initialMessages}: Props) {
  const { data: messages, error, mutate } = useSWR("/api/getMessages", fetcher);

  useEffect(() => {
    const channel = clientPusher.subscribe("messages");
    channel.bind("new-message", async (data: Message) => {
      // update message no need update cache
      if (messages?.find((message) => message.id === data.id)) return
      if (!messages) {
        mutate(fetcher);
      } else {
        mutate(fetcher, {
          optimisticData: [data, ...messages!],
          rollbackOnError: true,
        });
      }
    });
    return () => {
      channel.unbind_all()
      channel.unsubscribe()
    }
  }, [messages, mutate, clientPusher]);

  return (
    <div className="space-y-5 px-5 pt-8 pb-32 max-w-2xl xl:max-w-4xl mx-auto">
      {(messages || initialMessages)?.map((message) => (
        <MessageComponent key={message.id} message={message} />
      ))}
    </div>
  );
}

export default MessageList;
