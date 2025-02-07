import { Mastra, createLogger } from "@mastra/core";
import { weatherWorkflow } from "./workflows";
import { weatherAgent } from "./agents";
import { candidateWorkflow } from "./workflows/ai-resume-workflow";

export const mastra = new Mastra({
  workflows: { weatherWorkflow, candidateWorkflow },
  agents: { weatherAgent },
  logger: createLogger({
    level: "info"
  })
});
