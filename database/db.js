require('dotenv').config({path:'./.env'});
let Pool = require("pg").Pool
const pool = new Pool({
    user: ""+process.env.DB_USER+"",
    host: ""+process.env.DB_HOST+"",
    database: ""+process.env.DB_NAME+"",
    password: ""+process.env.DB_PASSWORD+"",
    port: 5432,
    max: 1,
})

console.log(process.env.DB_USER, process.env.DB_HOST, process.env.DB_NAME, process.env.DB_PASSWORD)

module.exports = {
    pool
}