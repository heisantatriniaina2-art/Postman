import express from "express";
import {
    getAllStudents,
    getStudentById,
    createStudent,
    updateStudent,
    updateStudentById,
    deleteStudentById
} from "./src/controller/studentController";
import { security } from "./src/middlewares/security";

const app = express();

app.use(express.json());

app.get("/students", getAllStudents);
app.get("/students/:id", getStudentById);
app.post("/students", security, createStudent);
app.put("/students/:id", security, updateStudent);
app.patch("/students/:id", security, updateStudentById);
app.delete("/students/:id", security, deleteStudentById);

app.listen(3000, () => {
    console.log("http://localhost:3000/students");
});