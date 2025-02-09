"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/home", (req, res) => {
    res.json({
        message: "Hello World"
    });
});
app.listen(process.env.PORT || 3001, () => {
    console.log(`Server is running at http://localhost:${process.env.PORT || 3001}`);
});
