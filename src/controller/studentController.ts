import { Response, Request } from "express";
import * as studentService from '../services/studentService';
import { request } from "node:http";

const getAllStudents = async (request: Request, response: Response) => {
    try {
        const students = await studentService.getAllStudents();
        response.status(200).json({
            message: "success",
            data: students
        });
    } catch (error) {
        console.error("VRAIE ERREUR :", error);
        response.status(500).json({
            message: "Error"
        });
    }
}

const getStudentById = async (request: Request, response: Response) => {
    try {
        const id = Number(request.params.id);
        const student = await studentService.getStudentById(id);
        response.status(200).json({
            message: "OK"
        });
    } catch (error) {
        response.status(500).json({ message: "Server error" });
    }
};



const createStudent = async (request, response) => {
    try {
        const newStudentData = request.body;
        const savedStudent = await studentService.createStudent(newStudentData);
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

const updateStudent = async (request: Request, response: Response) => {
    try {
        const id = Number(request.params.id);
        const { name, age } = request.body;
        const update = await studentService.updateStudent(id, { name, age });
        response.status(200).json({ message: "Updated with success" });
    } catch (error) {
        response.status(400).json({ message: "Error" });
    }
};

const updateStudentById = async (request: Request, response: Response) => {
    try {
        const id = Number(request.params.id);
        const { name, age } = request.body;
        const updated = await studentService.updateStudentById(id, { name, age });
        response.status(200).json({ message: "Updated partially with success", data: updated });
    } catch (error) {
        response.status(400).json({ message: "Error" });
    }
};

const deleteStudentById = async (request: Request, response: Response) => {
    try {
        const id = Number(request.params.id);
        const deleted = await studentService.deleteStudentById(id);
        response.status(200).json({ message: "Deleted with success", data: deleted });
    } catch (error) {
        response.status(400).json({ message: "Error" });
    }
};

export {
    getAllStudents,
    getStudentById,
    createStudent,
    updateStudent,
    updateStudentById,
    deleteStudentById
};