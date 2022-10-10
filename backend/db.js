import mysql from "mysql";
import * as dotenv from "dotenv-safe";
dotenv.config();

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.DB_PASSWORD,
  database: "tracker",
});
