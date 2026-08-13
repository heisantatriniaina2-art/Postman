declare var require: any;
const express = require("express");

const app = express();
app.use(express.json());

interface Student {
    id: number;
    name: string;
    age: number;
}

let students: Student[] = [
    {
        id: 5,
        name: "Alexia",
        age: 17
    },
    {
        id: 6,
        name: "Alex",
        age: 20
    }
];

app.get("/students", (request: any, response: any) => {
    response.status(200).json(students);
});


app.get("/students/:id", (request: any, response: any) => {
    const idStudent = parseInt(request.params.id);
    const student = students.find(student => student.id === idStudent);
    if (!student) {
        return response.status(404).json({
            message: "Student not found"
        });
    }
    response.status(200).json(student);
});



app.post("/students", (request: any, response: any) => {
    let newStudent = {
        id: students.length + 1,
        name: request.body.name,
        age: request.body.age
    };
    students.push(newStudent);
    response.status(201).json(newStudent);
});

app.put("/students/:id", (request: any, response: any) => {
    const idStudent = parseInt(request.params.id);
    const i = students.findIndex(student => student.id === idStudent);
    if (i === -1) {
        response.status(404).json({
            message: "Student not found"
        });
        return;
    }
    students[i].name = request.body.name;
    students[i].age = request.body.age;
    response.status(200).json(students[i]);
});


app.patch("/students/:id", (request: any, response: any) => {
    const idStudent = parseInt(request.params.id);
    const student = students.find(student => student.id === idStudent);
    if (!student) {
        return response.status(404).json({
            message: "Student not found"
        });
    }
    if (request.body.name !== undefined) {
        student.name = request.body.name;
    }
    if (request.body.age !== undefined) {
        student.age = request.body.age;
    }
    response.status(200).json(student);
});


app.delete("/students/:id", (request: any, response: any) => {
    const idStudent = parseInt(request.params.id);
    const i = students.findIndex(student => student.id === idStudent);
    if (i === -1) {
        return response.status(404).json({
            message: "Student not found"
        });
    }
    const deletedStudent = students.splice(i, 1);

    response.status(200).json({
        message: "Student deleted",
        student: deletedStudent[0]
    });
});


app.listen(3000, () => {
    console.log("http://localhost:3000/students");
});