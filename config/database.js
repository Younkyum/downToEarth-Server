require("dotenv").config();
const mysql = require("mysql2/promise");

const config = {
    host: `${process.env.DB_HOST}`,
    user: `${process.env.DB_USER}`,
    port: `${process.env.DB_PORT}`,
    password: `${process.env.DB_PW}`,
    database: `${process.env.DB_NAME}`,
};

const pool = mysql.createPool(config);

module.exports = pool;