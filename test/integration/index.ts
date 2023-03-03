import { Server } from "http";
import supertest from "supertest";

declare const expressApp: Server;

export const sendRequest = async <T>(
  url: string,
  method: "get" | "post",
  body?: Record<string, any>
): Promise<{ data?: T; errors?: any }> => {
  const superagent = supertest.agent(expressApp);

  const res = await superagent[method](url).send(body);
  return JSON.parse(res.text);
};
