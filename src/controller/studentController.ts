import { response } from "express";
import * as studentService from '../services/studentService';
import { error } from "node:console";
const getAllStudents = async (request, response) => {
    try {
        const students = await studentService.getAllStudentsService();
        response.status(200).json({
            message: "success",
            data: students
        });
    } catch (Error) {
        response.status(500).json({
            message: "Error"
        });
    }
}

const createStudent = async (request, response) => {
    try {
        const newStudentData = request.body;
        const savedStudent = await studentService.createStudenService(newStudentData);
        response.status(201).json({
            message: "Student created with success",
            data: savedStudent
        });
    } catch (error) {
        response.status(400).json({
            message: "Error"
        });
    }

};
export { getAllStudents, createStudent };