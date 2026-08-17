import postgres from 'postgres';

const sql = postgres({
    database: "students",
    username: "postgres",
    password: "42689",
    port: 5432,
});
export default sql;