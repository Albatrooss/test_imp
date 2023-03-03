import { Router } from "express";

export type Student = {
  id: number;
  name: string;
  grade: string;
};

const studentRouter = Router();

const students: Student[] = [{ id: 2, name: "tim", grade: "A" }];

studentRouter.get("/", (_req, res) => res.json({ data: students }));
studentRouter.get<{ id: string }>("/:id", (req, res) => {
  const student = students.find(({ id }) => Number(req.params.id) === id);
  res.json({ data: student });
});
studentRouter.post("/", (req, res) => {
  const newStudent = {
    id: Date.now(),
    ...req.body,
  };
  students.push(newStudent);
  res.status(201).json({ data: newStudent });
});

export default studentRouter;
