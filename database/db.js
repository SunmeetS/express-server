require('dotenv').config({path:'./.env'});
let Pool = require("pg").Pool
const pool = new Pool({
    user: "qvkfibib",
    host: "satao.db.elephantsql.com",
    database: "qvkfibib",
    password: "wuXFh1DyeXBE29lXToXk-_bK_gimeXWY",
    port: 5432,
    max: 1,
})

module.exports = {
    pool
}