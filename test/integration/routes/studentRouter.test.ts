import assert from "assert";
import Sinon from "sinon";
import { sendRequest } from "..";
import { Student } from "../../../src/router/studentRouter";

describe("Student Router", () => {
  const now = new Date();
  beforeEach(() => {
    Sinon.useFakeTimers(now);
  });
  afterEach(() => {
    Sinon.restore();
  });
  describe("Get all", () => {
    it("happy path", async () => {
      const res = await sendRequest<Student[]>("/api/student", "get");

      assert.deepStrictEqual(res.data, [{ id: 2, name: "tim", grade: "A" }]);
    });
  });
  describe("Get One", () => {
    it("happy path", async () => {
      const res = await sendRequest<Student>("/api/student/2", "get");

      assert.deepStrictEqual(res.data, { id: 2, name: "tim", grade: "A" });
    });
  });
  describe("Post", () => {
    it("happy path", async () => {
      const res = await sendRequest<Student>("/api/student", "post", {
        name: "adam",
        grade: "A",
      });
      console.log("r", res);
      assert.deepStrictEqual(res.data, {
        id: now.valueOf(),
        name: "adam",
        grade: "A",
      });
    });
  });
});
