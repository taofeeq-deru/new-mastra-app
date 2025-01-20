import { Mastra, createLogger } from "@mastra/core";
import { weatherWorkflow } from "./workflows";
import { weatherAgent, weatherAgent2 } from "./agents";

export const mastra = new Mastra({
  workflows: { weatherWorkflow },
  agents: { weatherAgent, weatherAgent2 },
  logger: createLogger({
    type: "CONSOLE",
    level: "INFO"
  })
});
