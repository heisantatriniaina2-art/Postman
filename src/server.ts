import express from "express";
import dotenv from 'dotenv';
dotenv.config();
import corsSecurity from "./conf/cors";
import { security } from "./security/middleware";
import { login } from "./controllers/authController";
import {
    getAllStudents,
    getStudentById,
    createStudent,
    updateStudent,
    updateStudentById,
    deleteStudentById
} from "./controllers/studentController";

const app = express();

app.use(express.json());


app.use(corsSecurity);
app.post("/login", login);

app.get("/students", getAllStudents);
app.get("/students/:id", getStudentById);
app.post("/students", security, createStudent);
app.put("/students/:id", security, updateStudent);
app.patch("/students/:id", security, updateStudentById);
app.delete("/students/:id", security, deleteStudentById);

app.listen(3000, () => {
    console.log("http://localhost:3000/students");
});