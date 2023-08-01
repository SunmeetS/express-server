
import * as queries from './query.js'
import { getStandupLinks } from "../seleniumTest.js"


// console.log(()=>getStandupLinks())

export const addLinks = async (req, res) => {

    try {
        let links = await getStandupLinks()
        console.log("links", links)
        links.forEach(({ date, url }) => {
            console.log(url)
            setTimeout(() => {
                pool.query(queries.addLinks, [date, url], (error) => {
                    if (error) {
                        console.log(error.message)
                        pool.query(queries.addLinks, [date, url], (err) => {
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


export const getLatestLinks = async (req, res) => {
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

