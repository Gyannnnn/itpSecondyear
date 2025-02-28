import express from 'express';
const studentRouter = express.Router();
import { createStudent, hello,getAllRegesteredStudents,getstudentbyrgestrationNumber, closed } from "../controllers/students.controller";

studentRouter.get("/",hello);
studentRouter.post("/newregestration",createStudent);
studentRouter.get("/getall",getAllRegesteredStudents);
studentRouter.get("/regdno",getstudentbyrgestrationNumber);
studentRouter.post("/closed",closed)
export default studentRouter;