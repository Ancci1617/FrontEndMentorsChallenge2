const mysql = require("mysql2/promise")
const objConnection = require("./connection-object.js")


const pool = mysql.createPool(objConnection);



module.exports = pool;

