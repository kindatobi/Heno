// import { Inngest } from "inngest";

// export const inngest = new Inngest({
//   id: "heno-store",
//   name: "Heno Store",
//   eventKey: process.env.INNGEST_EVENT_KEY,
// });

import { Inngest } from "inngest";

// Validate the key exists
const eventKey = process.env.INNGEST_EVENT_KEY;
const signingKey = process.env.INNGEST_SIGNING_KEY;

if (!eventKey) {
  console.error("⚠️ INNGEST_EVENT_KEY is missing!");
}

if (!signingKey) {
  console.error("⚠️ INNGEST_SIGNING_KEY is missing!");
}

export const inngest = new Inngest({
  id: "heno-store",
  name: "Heno Store",
  eventKey: eventKey, // Explicitly pass it
});

// Log for debugging (remove after confirming it works)
console.log("🔧 Inngest client created:", {
  hasEventKey: !!eventKey,
  hasSigningKey: !!signingKey,
  eventKeyPreview: eventKey?.slice(0, 20) + "...",
});
