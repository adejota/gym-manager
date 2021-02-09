var mysql = require('mysql')

module.exports = mysql.createConnection({
    // Desenvolvimento
    user: "root",
    password: "Ad_914989",
    host: "127.0.0.1",
    port: 3306,
    database: "gym_manager"

    // Produção
    /* user: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    host: process.env.RDS_HOSTNAME,
    port: process.env.RDS_PORT,
    database: process.env.RDS_DB_NAME */
})