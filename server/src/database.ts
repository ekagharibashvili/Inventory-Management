import { Pool } from "pg";

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "inventory",
  password: "mypoa123",
  port: 5432,
});

export default pool;
