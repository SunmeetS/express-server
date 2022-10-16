let Pool = require("pg").Pool
const pool = new Pool({
    user: "postgres",
    host: "https://express-server-production-dd8e.up.railway.app",
    database: "standupurls",
    password: "sunmeet",
    port: 5432
})

module.exports = {
    pool
}