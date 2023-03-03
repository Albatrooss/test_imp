import express from "express";
import { Server } from "http";
import router from "../src/router";

declare const expressApp: Server;

const bootstrap = async () => {
  let server: Server;
  before(() => {
    const app = express();

    app.use(express.json());

    app.get("/", (_req, res) => {
      res.send("Test Running");
    });

    server = app.listen(0);

    app.use("/api", router);

    // @ts-ignore no globals
    global.expressApp = app;
  });
  after(() => {
    server?.close();
  });
};

export default bootstrap;
