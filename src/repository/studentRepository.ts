import postgres from 'postgres';

const sql = postgres({
    database: "api",
    username: "postgres",
    password: "42689",
    port: 5432,
});

const findAllStudents = async () => {
    const students = await sql`SELECT*FROM students`;
    return students;
}

const saveStudent = async (student) => {
    const { id, name, age } = student;
    const [insertedStudent] = await sql`
        INSERT INTO students (id, name, age) 
        VALUES (${id}, ${name}, ${age}) 
        RETURNING *
    `;
    return insertedStudent;
};


let Student = [
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



export { findAllStudents, saveStudent }