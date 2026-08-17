import * as studentRepository from '../repository/studentRepository';

const getAllStudents = async () => {
    return await studentRepository.findAllStudents();
};

const getStudentById = async (id: number) => {
    return await studentRepository.findStudentById(id);
};


const createStudent = async (student) => {
    if (student.age < 0) {
        throw new Error("Error")
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