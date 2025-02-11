"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllRegesteredStudents = exports.createStudent = exports.hello = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const hello = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({
        message: "Hello World"
    });
});
exports.hello = hello;
const createStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, gender, graduationYear, email, registrationNumber, branch, section, whatsappNo, primaryDomain, secondaryDomain } = req.body;
    if (!name || !gender || !graduationYear || !email || !registrationNumber || !branch || !section || !whatsappNo || !primaryDomain || !secondaryDomain || name === "" || gender === "" || graduationYear === "" || email === "" || registrationNumber === "" || branch === "" || section === "" || whatsappNo === "" || primaryDomain === "" || secondaryDomain === "") {
        res.json({
            message: "Please fill all the fields"
        });
        return;
    }
    try {
        const regesteredStudents = yield prisma.students.create({
            data: {
                name,
                gender,
                graduationYear,
                email,
                registrationNumber,
                branch,
                section,
                whatsappNo,
                primaryDomain,
                secondaryDomain
            }
        });
        if (!regesteredStudents) {
            res.json({
                message: "Something went wrong"
            });
            return;
        }
        res.json({
            message: "Student Regestered Successfully",
            data: regesteredStudents
        });
    }
    catch (error) {
        const err = error;
        res.json({
            message: err.message
        });
    }
});
exports.createStudent = createStudent;
const getAllRegesteredStudents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const regesteredStudents = yield prisma.students.findMany();
        if (!regesteredStudents || regesteredStudents.length === 0) {
            res.json({
                message: "No Students Regestered"
            });
            return;
        }
        res.json({
            message: "All Regestered Students",
            data: regesteredStudents
        });
    }
    catch (error) {
        const err = error;
        res.json({
            message: err.message
        });
    }
});
exports.getAllRegesteredStudents = getAllRegesteredStudents;
