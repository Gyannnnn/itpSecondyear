import express from 'express';
const studentRouter = express.Router();
import { createStudent, hello,getAllRegesteredStudents } from "../controllers/students.controller";

studentRouter.get("/",hello);
studentRouter.post("/newregestration",createStudent);
studentRouter.get("/getall",getAllRegesteredStudents)
export default studentRouter;