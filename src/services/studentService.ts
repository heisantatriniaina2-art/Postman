import * as studentRepository from '../repositories/studentRepository';

const getAllStudents = async () => {
    return await studentRepository.findAllStudents();
};

const getStudentById = async (id: number) => {
    return await studentRepository.findStudentById(id);
};


const createStudent = async (student: any) => {
    if (student.age < 0) {
        throw new Error("Student age cannot be negative")
    }
    return await studentRepository.createStudent(student);
};

const updateStudent = async (id: number, stud: { name: string; age: number }) => {
    return await studentRepository.updateStudent({ id: id, name: stud.name, age: stud.age });
};

const updateStudentById = async (id: number, stud: { name?: string; age?: number }) => {
    return await studentRepository.updateStudentById(id, stud);
};

const deleteStudentById = async (id: number) => {
    return await studentRepository.deleteStudentById(id);
};

export {
    getAllStudents,
    getStudentById,
    createStudent,
    updateStudent,
    updateStudentById,
    deleteStudentById
};