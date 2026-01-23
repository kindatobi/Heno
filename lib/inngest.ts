import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "heno-store",
  name: "Heno Store",
  eventKey: process.env.INNGEST_EVENT_KEY,
});
