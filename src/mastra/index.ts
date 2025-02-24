import { Mastra, createLogger, DefaultStorage } from "@mastra/core";
import { weatherAgent } from "./agents";
import { weatherWorkflow } from "./workflows";

const storage = new DefaultStorage({
  config: {
    url: process.env.MASTRA_STORAGE_URL!,
    authToken: process.env.MASTRA_STORAGE_AUTH_TOKEN!
  }
});

storage.init();

export const mastra = new Mastra({
  agents: { weatherAgent },
  workflows: { weatherWorkflow },
  logger: createLogger({
    name: "Mastra",
    level: "info"
  }),
  storage
});
