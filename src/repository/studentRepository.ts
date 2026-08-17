import postgres from 'postgres';

const sql = postgres({
    database: "students",
    username: "postgres",
    password: "42689",
    port: 5432,
});

const findAllStudents = async () => {
    return await sql`SELECT * FROM student`;
};

const findStudentById = async (id: number) => {
    const [student] = await sql`SELECT * FROM student WHERE id = ${id}`;
    return student;
}

const createStudent = async (student: { id: number; name: string; age: number }) => {
    const { id, name, age } = student;
    const [insertedStudent] = await sql`
        INSERT INTO student (name, age) 
        VALUES (${name}, ${age}) 
        RETURNING *
    `;
    return insertedStudent;
};

const updateStudent = async (student: { id: number; name: string; age: number }) => {
    const { id, name, age } = student;
    const [update] = await sql`
        UPDATE student  
        SET name = ${name}, age = ${age}
        WHERE id = ${id}
        RETURNING *
    `;
    return update;
};

const updateStudentById = async (id: number, student: { name?: string; age?: number }) => {
    const [updated] = await sql`
        UPDATE student
        SET 
            name = COALESCE(${student.name ?? null}, name),
            age = COALESCE(${student.age ?? null}, age)
        WHERE id = ${id}
        RETURNING *
    `;
    return updated;
}

const deleteStudentById = async (id: number) => {
    const [deleted] = await sql`
        DELETE FROM student 
        WHERE id = ${id}
        RETURNING *
    `;
    return deleted;
}

export {
    findAllStudents,
    findStudentById,
    createStudent,
    updateStudent,
    updateStudentById,
    deleteStudentById
};