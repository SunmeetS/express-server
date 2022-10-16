let Pool = require("pg").Pool
const pool = new Pool({
    user: "postgres",
    host: "express-server1.vercel.app",
    database: "standupurls",
    password: "sunmeet",
    port: 5432
})

module.exports = {
    pool
}