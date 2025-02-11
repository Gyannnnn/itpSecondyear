"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
//IMPORTS
const students_routes_1 = __importDefault(require("./routes/students.routes"));
//MIDDLEWARES
app.use((0, cors_1.default)());
app.use(express_1.default.json());
//ROUTES
app.use("/api/v1/students", students_routes_1.default);
app.get("/", (req, res) => {
    res.json({
        Message: "Welcome to Regestration Form api",
        version: "1.0.0",
        dev: "Gyanaranjan Patra"
    });
});
app.listen(process.env.PORT || 3001, () => {
    console.log(`Server is running at http://localhost:${process.env.PORT || 3001}`);
});
