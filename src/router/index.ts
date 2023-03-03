import { Router } from "express";
import studentRouter from "./studentRouter";

const router = Router();

router.use("/student", studentRouter);

export default router;
