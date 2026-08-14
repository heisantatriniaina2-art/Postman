export interface Student {
    id: number;
    name: string;
    age: number;
}

const students: Student[] = [
    { id: 5, name: "Alexia", age: 17 },
    { id: 6, name: "Alex", age: 20 }
];

export const studentModel = {
    getAll: (): Student[] => {
        return students;
    },

    getById: (id: number): Student | undefined => {
        return students.find(s => s.id === id);
    },

    createStudent: (name: string, age: number): Student => {
        const newStudent: Student = {
            id: students.length > 0 ? students[students.length - 1].id + 1 : 1,
            name,
            age
        };
        students.push(newStudent);
        return newStudent;
    },

    updateStudent: (id: number, name: string, age: number): Student | null => {
        const index = students.findIndex(s => s.id === id);
        if (index === -1) return null;
        students[index].name = name;
        students[index].age = age;
        return students[index];
    },

    deleteStudent: (id: number): Student | null => {
        const index = students.findIndex(s => s.id === id);
        if (index === -1) return null;
        const deleted = students.splice(index, 1);
        return deleted[0];
    }
};