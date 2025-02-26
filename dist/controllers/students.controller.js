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
exports.getstudentbyrgestrationNumber = exports.getAllRegesteredStudents = exports.createStudent = exports.hello = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const hello = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({
        message: "Hello World"
    });
});
exports.hello = hello;
const createStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, gender, email, registrationNumber, branch, section, whatsappNo, primaryDomain, secondaryDomain, githubUrl, projectLink1, projectLink2, resumeLink } = req.body;
    if (!name || !gender || !email || !registrationNumber || !branch || !section || !whatsappNo || !primaryDomain || !secondaryDomain || !githubUrl || !projectLink1 || !projectLink2 || name.trim().length === 0 || gender.trim().length === 0 || email.trim().length === 0 || registrationNumber.trim().length === 0 || branch.trim().length === 0 || section.trim().length === 0 || whatsappNo.trim().length === 0 || primaryDomain.trim().length === 0 || secondaryDomain.trim().length === 0 || githubUrl.trim().length === 0 || projectLink1.trim().length === 0 || projectLink2.trim().length === 0) {
        res.status(400).json({
            message: "All fields are required"
        });
        return;
    }
    const isregdExist = yield prisma.students.findUnique({
        where: {
            registrationNumber
        }
    });
    if (isregdExist) {
        res.status(400).json({
            message: "Student already exists"
        });
        return;
    }
    try {
        const regesteredStudents = yield prisma.students.create({
            data: {
                name,
                gender,
                email,
                registrationNumber,
                branch,
                section,
                whatsappNo,
                primaryDomain,
                secondaryDomain,
                githubUrl,
                projectLink1,
                projectLink2,
                resumeLink
            }
        });
        if (!regesteredStudents) {
            res.status(400).json({
                message: "Something went wrong"
            });
            return;
        }
        res.status(201).json({
            message: "Student Regestered Successfully",
            data: regesteredStudents
        });
    }
    catch (error) {
        const err = error;
        res.status(400).json({
            message: err.message
        });
    }
});
exports.createStudent = createStudent;
const getAllRegesteredStudents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const regesteredStudents = yield prisma.students.findMany();
        if (!regesteredStudents || regesteredStudents.length === 0) {
            res.status(404).json({
                message: "No Students Regestered"
            });
            return;
        }
        res.status(200).json({
            message: "All Regestered Students",
            data: regesteredStudents
        });
    }
    catch (error) {
        const err = error;
        res.status(400).json({
            message: err.message
        });
    }
});
exports.getAllRegesteredStudents = getAllRegesteredStudents;
const getstudentbyrgestrationNumber = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { registrationNumber } = req.body;
    if (!registrationNumber) {
        res.status(400).json({
            message: " Registration number required"
        });
    }
    try {
        const student = yield prisma.students.findUnique({
            where: {
                registrationNumber
            }
        });
        if (!student) {
            res.status(404).json({
                message: "Student not found"
            });
            return;
        }
        res.status(200).json({
            message: "Student found",
            data: student
        });
    }
    catch (error) {
        const err = error;
        res.status(400).json({
            message: err.message
        });
    }
});
exports.getstudentbyrgestrationNumber = getstudentbyrgestrationNumber;
