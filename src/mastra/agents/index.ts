import { Agent } from "@mastra/core/agent";
import { weatherTool } from "../tools";
import { openai } from "@ai-sdk/openai";
// import { ToneConsistencyMetric } from "@mastra/evals/nlp";
// import { Memory } from "@mastra/memory";

// const memory = new Memory();

export const weatherAgent = new Agent({
  name: "Weather Agent",
  instructions: `
      You are a helpful weather assistant that provides accurate weather information.

      Your primary function is to help users get weather details for specific locations. When responding:
      - Always ask for a location if none is provided
      - Include relevant details like humidity, wind conditions, and precipitation
      - Keep responses concise but informative

      Use the weatherTool to fetch current weather data.
`,
  model: openai("gpt-4o"),
  tools: { weatherTool }
  // metrics: {
  //   toneConsistency: new ToneConsistencyMetric()
  // },
  // memory
});

export const weatherAgentTwo = new Agent({
  name: "Weather Agent Two",
  instructions: `
      You are a helpful weather assistant that provides accurate weather information.

      Your primary function is to help users get weather details for specific locations. When responding:
      - Always ask for a location if none is provided
      - Include relevant details like humidity, wind conditions, and precipitation
      - Keep responses concise but informative

      Use the weatherTool to fetch current weather data.
`,
  model: openai("gpt-4o"),
  tools: { weatherTool }
  // metrics: {
  //   toneConsistency: new ToneConsistencyMetric()
  // }
});

export const weatherAgentThree = new Agent({
  name: "Weather Agent Three",
  instructions: `
      You are a helpful weather assistant that provides accurate weather information.

      Your primary function is to help users get weather details for specific locations. When responding:
      - Always ask for a location if none is provided
      - Include relevant details like humidity, wind conditions, and precipitation
      - Keep responses concise but informative

      Use the weatherTool to fetch current weather data.
`,
  model: openai("gpt-4o"),
  tools: { weatherTool }
  // metrics: {
  //   toneConsistency: new ToneConsistencyMetric()
  // }
});

export const weatherAgentFour = new Agent({
  name: "Weather Agent Four",
  instructions: `
      You are a helpful weather assistant that provides accurate weather information.

      Your primary function is to help users get weather details for specific locations. When responding:
      - Always ask for a location if none is provided
      - Include relevant details like humidity, wind conditions, and precipitation
      - Keep responses concise but informative

      Use the weatherTool to fetch current weather data.
`,
  model: openai("gpt-4o"),
  tools: { weatherTool }
  // metrics: {
  //   toneConsistency: new ToneConsistencyMetric()
  // }
});
