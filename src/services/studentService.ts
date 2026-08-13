import * as studentRepository from '../repository/studentRepository';

const getAllStudentsService = async () => {
    return await studentRepository.findAllStudents();
};

const createStudenService = async (stut) => {
    if (stut.age < 0) {
        throw new Error("Error")
    }
    return await studentRepository.saveStudent(stut);
}
export { getAllStudentsService, createStudenService };