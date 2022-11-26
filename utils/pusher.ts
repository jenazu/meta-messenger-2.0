import Pusher from "pusher";
import ClientPusher from "pusher-js";

export const serverPusher = new Pusher({
    appId: "1514026",
    key: "e559d315cbc0a51ee9ba",
    secret: "d1e575abc7a99080c0dc",
    cluster: "ap1",
    useTLS: true
  });

export const clientPusher = new ClientPusher("e559d315cbc0a51ee9ba", {
  cluster: "ap1",
  forceTLS: true
});
