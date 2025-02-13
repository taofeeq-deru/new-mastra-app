import { Mastra, createLogger } from "@mastra/core";
import { weatherWorkflow } from "./workflows";
import { weatherAgent } from "./agents";

export const mastra = new Mastra({
  agents: { weatherAgent },
  logger: createLogger({
    level: "info"
  })
});
