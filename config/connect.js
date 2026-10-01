require("dotenv").config();

const mysql = require("mysql2/promise");
const chalk = require("chalk");

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,

    ssl: {
        rejectUnauthorized: false
    }
});

pool.getConnection()
    .then(connection => {
        console.log(chalk.green("Database connected successfully!"));
        connection.release();
    })
    .catch(err => {
        console.log("Database connection failed:", err.message);
    });

module.exports = pool;