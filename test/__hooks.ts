import "reflect-metadata";
import dotenv from "dotenv";
dotenv.config();

import bootstrap from "./__bootstrap.test";

export const mochaHooks = {
  async beforeAll() {
    await bootstrap();
  },
};
