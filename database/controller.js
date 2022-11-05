
const queries = require("./query")
const { pool } = require("./db")
let { getStandupLinks } = require("../seleniumTest")
let cron = require("node-cron")


// console.log(()=>getStandupLinks())

const addLinks = async (req, res) => {

    try {
        let links = await getStandupLinks()
        console.log("links", links)
        links.forEach(({ date, url }) => {
            console.log(url)
            setTimeout(() => {
                pool.query(queries.addLinks, [date, url], (error, result) => {
                    if (error) {
                        console.log(error.message)
                        pool.query(queries.addLinks, [date, url], (err, result) => {
                            console.log(err.message)
                        })
                    }
                })
            }, 400);
        })
        res.send("Links Added Succesfully")
    } catch (err) {
        console.log(err, " Hello there")
        res.send("Hello")
    }
}
// pool.query(queries.addLinks, )


const getLatestLinks = async (req, res) => {

    try {
        pool.query(queries.getLatestLinks, async (error, result) => {
            if (error) res.send(error.message);
            else {
                res.header("Access-Control-Allow-Origin", "*");
                res.status(200).json(result.rows)
            }
            // console.log("links: ", links)
        })
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    addLinks,
    getLatestLinks,
}