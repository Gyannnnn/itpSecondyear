"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const studentRouter = express_1.default.Router();
const students_controller_1 = require("../controllers/students.controller");
studentRouter.get("/", students_controller_1.hello);
studentRouter.post("/newregestration", students_controller_1.createStudent);
studentRouter.get("/getall", students_controller_1.getAllRegesteredStudents);
studentRouter.get("/regdno", students_controller_1.getstudentbyrgestrationNumber);
studentRouter.post("/closed", students_controller_1.closed);
exports.default = studentRouter;
