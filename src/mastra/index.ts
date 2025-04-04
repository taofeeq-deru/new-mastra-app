import { Mastra } from "@mastra/core";
import { createLogger } from "@mastra/core/logger";
import { weatherAgent, weatherAgentTwo, weatherAgentThree } from "./agents";
import { weatherWorkflow } from "./workflows";
// import { DefaultStorage } from "@mastra/core/storage/libsql";

// const storage = new DefaultStorage({
//   config: {
//     url: process.env.MASTRA_STORAGE_URL || "",
//     authToken: process.env.MASTRA_STORAGE_AUTH_TOKEN || ""
//   }
// });

// storage.init();

export const mastra = new Mastra({
  agents: { weatherAgent, weatherAgentTwo, weatherAgentThree },
  workflows: { weatherWorkflow },
  logger: createLogger({
    name: "Mastra",
    level: "info"
  })
});
