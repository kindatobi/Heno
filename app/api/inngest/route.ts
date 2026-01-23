// import { serve } from "inngest/next";
// import { inngest } from "@/lib/inngest";
// import { processOrder } from "@/inngest/functions/order-processing";

// export const { GET, POST, PUT } = serve({
//   client: inngest,
//   functions: [processOrder],
// });

import { serve } from "inngest/next";
import { inngest } from "@/lib/inngest";
import { processOrder } from "@/inngest/functions/order-processing";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [processOrder],
  signingKey: process.env.INNGEST_SIGNING_KEY, // Add this!
});
